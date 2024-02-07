import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { createInterface } from "readline";
import { airdrop, getBalance, transfer } from "./wallet_manager";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})
const message: string = `
**********************************************************************
*                                                                    *
*       Solana cüzdan yönetim uygulmasına hoşgeldiniz!               *
*                                                                    *
*       Lütfen yapmak istediğiniz işlemi aşağıdan seçiniz!           *
* 53JuxJq5BBSd3oLtZ9asQACeiofzxAnEuTXN1HbYeAwD
*--------------------------------------------------------------------*
*       1) airdrop                                                   *
*       2) balance                                                   *
*       3) transer                                                   *
*--------------------------------------------------------------------*
* ÇIKMAK İÇİN q'ya basınız!!!                                        *
**********************************************************************
`;
const askQuestion = () => {
    rl.question(message, async (answer) => {
        const intAnswer = parseInt(answer.trim());
        switch (intAnswer) {
            case 1:
                await airdrop();
                console.info(`${LAMPORTS_PER_SOL} lamport transfer edildi.`);
                askQuestion();
                break;

            case 2:
                const bal = await getBalance();
                console.info(`${bal} SOL bakiyeniz bulunmaktadır.`);
                askQuestion();
                break;
            case 3:
                rl.question(`Lütfen transfer edilecek hesabın açık adresini giriniz?`, (a) => {
                    try {
                        const targetWallet = new PublicKey(a.trim());
                        rl.question(`Lütfen transfer edilecek SOL adetini giriniz?`, async (solCount) => {
                            const solCountInt = parseInt(solCount);
                            if (solCountInt>0) {
                                console.log(targetWallet+" hesabına "+solCountInt+" adet SOL taransfer ediliyor;")
                               let sonuc= await transfer(targetWallet, solCountInt);
                               if(sonuc){
                                console.log("Transfer başarılı");
                               }else{
                                console.log("Transfer başarısız!");
                            }
                            }
                            askQuestion();
                        });
                    } catch (error) {
                        console.log("HATA");
                        console.error(error);
                        askQuestion();
                    }
                });
                break;
            default:
                process.exit();
                break;
        }
       
    });
};

askQuestion();