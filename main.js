const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(index, timestamp, data, previiousHash = '') {
		this.index. = index;
		this.timestamp = timestamp;
		this.previiousHash = previiousHash;
		this.hash = this.calculateHash();
	}

	calculateHash() {
		return SHA256(this.index  + this.previiousHash + this.timestamp + JSON.stringify(this.data)).toString();
	}
}
