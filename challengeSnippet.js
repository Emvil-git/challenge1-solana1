const {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const fromAirDropSignature = await connection.requestAirdrop(
    new PublicKey(process.argv[2]),
    2 * LAMPORTS_PER_SOL
);
