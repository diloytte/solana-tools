import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import fs from 'fs';

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


export const convertPrivateKey = (filePathToByteArray: string) => {
    fs.readFile(filePathToByteArray, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const privateKeyArray: number[] = JSON.parse(data);

            if (privateKeyArray.length !== 64) {
                console.error('Private key array must contain exactly 64 elements.');
                return;
            }

            const privateKeyUint8Array = new Uint8Array(privateKeyArray);
            const privateKeyHex = Array.from(privateKeyUint8Array)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');

            const privateKeyB58 = bs58.encode(privateKeyUint8Array);

            console.log('Private Key in Hex:', privateKeyHex);
            console.log('Private Key in Base58:', privateKeyB58);
        } catch (error) {
            console.error('Error processing the private key:', error);
        }
    });
};