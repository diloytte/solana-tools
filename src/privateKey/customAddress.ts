import { spawnSync } from "child_process";

function runSolanaKeygenGrind(prefix: string) {
    if (!prefix) {
        console.error("Error: Please provide a prefix string.");
        process.exit(1);
    }

    const command = "solana-keygen";
    const args = ["grind", "--starts-with", `${prefix}:1`];

    const result = spawnSync(command, args, { stdio: "inherit", shell: true });
    
    if (result.error) {
        console.error("Error executing command:", result.error.message);
        process.exit(1);
    }
}

const prefix = process.argv[2];
runSolanaKeygenGrind(prefix);