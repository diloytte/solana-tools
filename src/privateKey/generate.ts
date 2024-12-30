import { Keypair } from "@solana/web3.js";

function generateSolanaPrivateKey(): string {
    const keypair = Keypair.generate();
    const privateKey = keypair.secretKey;
    return Buffer.from(privateKey).toString("hex");
}

if (require.main === module) {
    console.log(generateSolanaPrivateKey());
}

export { generateSolanaPrivateKey };
