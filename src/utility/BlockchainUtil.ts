const axios = require('axios').default;
import { Transaction } from 'ethereumjs-tx';

const chain = 'goerli';

export default class BlcokchainUtil {

    static async getCurrentGasPrices(){ 
        try {
            let response = await axios.get("https://www.gwei.at/api/gas")
            let gasPrice = response.data.gasData.gasPrices;
        
            return gasPrice; 
        }
        catch(err) {
            throw(err);
        }
    }
}