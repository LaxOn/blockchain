const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(index, timestamp, data, previousHash = '') {
		this.index = index;
		this.timestamp = timestamp;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0;
	}

	calculateHash() {
		return SHA256(this.index  + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
	}

	mineBlock(diffiiculty) {
		while(this.hash.substring(0, diffiiculty) !== Array(diffiiculty + 1).join("0")) {
			this.nonce++;
			this.hash = this.calculateHash();

		}
		console.log("Block mined: " + this.hash)
	}
}




class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
		this.diffiiculty = 4;
	}

	createGenesisBlock(){
		return new Block(0, "01/01/2019", "Genesis block", "0");
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.mineBlock(this.diffiiculty);
		this.chain.push(newBlock);
	}

	isChainValid() {
		for(let i = 1; i < this.chain.length; ++i) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;

			}

			if (currentBlock.previousHash !== previousBlock.hash) {
				return false
			}
		}
		return true;
	}
}

let laxCoin = new Blockchain();
console.log("Mining block 1...")
laxCoin.addBlock(new Block(1, "01/08/2019"), { amount: 4 });
console.log("Mining block 2...")
laxCoin.addBlock(new Block(2, "08/08/2019"), { amount: 10 });


// console.log(JSON.stringify(laxCoin, null, 4));