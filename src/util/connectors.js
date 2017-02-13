import { Uport } from 'uport-lib/dist/uportlib.js'

export const uport = new Uport('universal-reevoo');
export const web3 = uport.getWeb3()
