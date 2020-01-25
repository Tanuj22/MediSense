import web3 from './web3.js';
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    JSON.parse(Voting.interface),
    '0x1cEc1484f58d960e556a9684d99d904936556efa'
);

export default instance;
