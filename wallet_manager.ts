import  { Keypair, clusterApiUrl, Connection,LAMPORTS_PER_SOL, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, Signer } from "@solana/web3.js";
import { sign } from "node:crypto";
import * as fs from "node:fs"
const network = "http://127.0.0.1:8899";//clusterApiUrl("testnet");


if(!fs.existsSync("wallet.json")){
    const newWallet = Keypair.generate();
    const walletData = {
        publicKey: newWallet.publicKey,
        secretKey: Array.from(newWallet.secretKey),
      };
    fs.writeFileSync("wallet.json", JSON.stringify(walletData));
}
var f=fs.readFileSync("wallet.json","utf8");
const jsonWallet = JSON.parse(f);
const newWallet:Signer= {
    publicKey: new PublicKey(jsonWallet.publicKey),
    secretKey: Uint8Array.from(jsonWallet.secretKey)
}

export async function airdrop() {
    const connection = new Connection(network, "confirmed");
    const getLatestBlockHash= await connection.getLatestBlockhash();
    const transaction = await connection.requestAirdrop(new PublicKey(newWallet.publicKey), LAMPORTS_PER_SOL);
    await connection.confirmTransaction({
        signature:transaction,
        blockhash:getLatestBlockHash.blockhash,
        lastValidBlockHeight:getLatestBlockHash.lastValidBlockHeight
    });
    console.log(`Cüzdana ${LAMPORTS_PER_SOL} SOL gönderildi.`);

    return true;
}
// Cüzdan bakiyesini kontrol edin
export async function getBalance() {
    const connection = new Connection(network, "confirmed");
    const balance = await connection.getBalance(new PublicKey(newWallet.publicKey));
    console.log(`Cüzdan bakiyesi: ${balance} SOL`);
    return balance;
}

  // Cüzdandan başka bir cüzdana transfer yapın
export async function transfer(toAddress:PublicKey, amount:number) {
    const connection = new Connection(network, "confirmed");
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: new PublicKey(newWallet.publicKey),
            toPubkey: toAddress,
            lamports: amount * LAMPORTS_PER_SOL
        })
    );
    await sendAndConfirmTransaction(connection,transaction,[newWallet]);
    return true;
}
