import IController from '../interface/IController';
import BaseController from './baseController';
import ApiResponse from '../utility/apiResponse';
import WalletService from '../service/walletService';
import Util from '../utility/util';

export default class WalletController extends BaseController {         

    static generateMnemonicCode : IController = async (req, res) => {
        try {     
            let mnemonicCode = await WalletService.generateMnemonicCode();
            ApiResponse.result(res, mnemonicCode, 200);
        }
        catch (err: any) {            
            err.source = "WalletController:generateMnemonicCode";
            ApiResponse.error(res, err);
        }
    }

    static getWalletAddress : IController = async (req, res) => {
        const mnemonic = Util.String(req.query.mnemonic);
        const password = Util.String(req.query.password);
        try {     
            await WalletService.getWalletAddress(password, mnemonic, res);
        }
        catch (err: any) {            
            err.source = "WalletController:getWalletAddress";
            ApiResponse.error(res, err);
        }
    }
}


