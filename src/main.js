const {Blockchain, Transaction} = require('./blockchain');

let laxCoin = new Blockchain();
laxCoin.createTransaction(new Transaction('address1','address2', 100));
laxCoin.createTransaction(new Transaction('address2','address1', 50));

console.log('\nStaring the miner...');
laxCoin.minePendingTransactions('address-bryan');

console.log('\nBalance of bryan is ', laxCoin.getBalanceOfAddress('address-bryan'));

console.log('\nStaring the miner again...');
laxCoin.minePendingTransactions('address-bryan');

console.log('\nBalance of bryan is ', laxCoin.getBalanceOfAddress('address-bryan'));
