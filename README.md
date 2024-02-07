# Solana Wallet Manager

## Welcome!

This application helps you manage a wallet on the Solana blockchain. You can perform actions such as claiming airdrops, checking your balance, and transferring SOL to other Solana accounts.

## Installation

Make sure you have Node.js and solana cli installed on your computer.

First, we set up the Solana test environment and leave it open as long as the application runs.

```bash
solana-test-validator
```

To use Solana in a local development environment, we use the set --url localhost command. After the development environment is ready, we create the target wallet and store the public key in a place where we cannot lose it.

```bash
npm install
solana config set --url localhost
solana-keygen new --outfile target_wallet.json

```

## Comands

**Airdrop:** Claims 53JuxJq5BBSd3oLtZ9asQACeiofzxAnEuTXN1HbYeAwD test SOL to your wallet.
**Balance:** Displays the SOL balance in your wallet.
**Transfer:** Allows you to transfer SOL from your wallet to another Solana wallet.

## Usage

```bash
npm run up
```

Follow the instructions on the screen.

## Example Usage

```plaintext
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
1
Cüzdana 1000000000 SOL gönderildi.
1000000000 lamport transfer edildi.

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
2
Cüzdan bakiyesi: 13000000000 SOL
13000000000 SOL bakiyeniz bulunmaktadır.

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
3
Lütfen transfer edilecek hesabın açık adresini giriniz?53JuxJq5BBSd3oLtZ9asQACeiofzxAnEuTXN1HbYeAwD
Lütfen transfer edilecek SOL adetini giriniz?5
53JuxJq5BBSd3oLtZ9asQACeiofzxAnEuTXN1HbYeAwD hesabına 5 adet SOL taransfer ediliyor;
Transfer başarılı

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
2
Cüzdan bakiyesi: 7999995000 SOL
7999995000 SOL bakiyeniz bulunmaktadır.
```

## **Troubleshooting**

If you encounter any problems, please submit a report to the issues section of the GitHub repository.

## License

[MIT](https://choosealicense.com/licenses/mit/)
