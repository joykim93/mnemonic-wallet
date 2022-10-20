import lightwallet from 'eth-lightwallet'
import * as bip39 from 'bip39';
import Web3 from 'web3';
import HDKey from 'hdkey';
import BlcokchainUtil from '../utility/BlockchainUtil';

const chain = 'goerli';
let root : any;

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
}  