import lightwallet from 'eth-lightwallet'
import ApiResponse from '../utility/apiResponse';
let keyStoreInstance : any;

export default class WalletService {
    
    static async generateMnemonicCode() {    
        try {
            let mnemomic = lightwallet.keystore.generateRandomSeed();
            return mnemomic;    
        }   
        catch (err) {
            throw(err);
        } 
    }

    static async getWalletAddress(password: string, mnemonic: string, res: any) {    
        try {
            lightwallet.keystore.createVault(
                {
                    password,
                    seedPhrase: mnemonic,
                    hdPathString: "m/0'/0'/0'",
                },
                function (err: any, ks: any) {
                    keyStoreInstance = ks;
                    keyStoreInstance.keyFromPassword(password, async (err: any, pwDerivedKey: any) => {
                        keyStoreInstance.generateNewAddress(pwDerivedKey, 1);
                        const walletAddress = keyStoreInstance.getAddresses().toString() as string;

                        return ApiResponse.result(res, { walletAddress: walletAddress }, 201);
                    });
                }
            );
        }   
        catch (err) {
            throw(err);
        } 
    }
}  