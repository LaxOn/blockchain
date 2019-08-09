const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate('6eca9541ee9ec05c67ca49c48ac3f8ce752f225fb2967f021cf319c99a968724')
const myWalletAddress = myKey.getPublic('hex')

let laxCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
laxCoin.addTransaction(tx1);

console.log('\nStaring the miner...');
laxCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of bryan is ', laxCoin.getBalanceOfAddress(myWalletAddress));

laxCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', laxCoin.isChainValid())