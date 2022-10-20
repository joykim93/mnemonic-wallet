import express from "express";
const router = express.Router();

import WalletController from "../controller/walletController";

     // Wallet (지갑)
     router.get         ("/wallet/mnemonic"              ,WalletController.generateMnemonicCode);

export default router;