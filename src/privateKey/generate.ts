import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export function generateSolanaKeypair() {
    const keypair = Keypair.generate();
    return {
        privateKey: bs58.encode(keypair.secretKey),
        address: keypair.publicKey.toBase58(),
    };
}

if (require.main === module) {
    const { privateKey, address } = generateSolanaKeypair();
    console.log("Public Key:", address);
    console.log("Private Key:", privateKey);
}