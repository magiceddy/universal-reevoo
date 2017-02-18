import { Connect } from 'uport-connect';

export const uport = new Connect('universal-reevoo');
export const web3 = uport.getWeb3();
