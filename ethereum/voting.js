import web3 from './web3.js';
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    JSON.parse(Voting.interface),
    '0xBadf0362B7aDdd319326506e9CA4A554fe4b0CD6'
);

export default instance;
