import { Aftermath } from "aftermath-ts-sdk";


const afSdk = new Aftermath("MAINNET");

async function getPoolApr() {

    await afSdk.init(); // initialize provider

    const pools = afSdk.Pools();

    const pool = await pools.getPool({
        objectId: "0x..." // your pool ID
    });

    console.log('Pool:', pool);
}

getPoolApr().catch(console.error);