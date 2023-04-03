const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privKey = secp.utils.randomPrivateKey();
const pubKey = secp.getPublicKey(privKey);
const Pub = pubKey.slice(-20);
console.log('privKey:',toHex(privKey));
console.log('Public Key :',toHex(Pub));
