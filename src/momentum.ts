import { MmtSDK } from '@mmt-finance/clmm-sdk';

async function getPoolApr() {
    try {
        const sdk = await MmtSDK.NEW({
            network: 'mainnet',
        });
        console.log('SDK initialized successfully');

        const pools = await sdk.Pool.getAllPools();
        pools.forEach(pool => {
            const poolInfo = {
                'Token X': pool.tokenX.name,
                'Token Y': pool.tokenY.name,
                'Liquidity': pool.liquidity,
                'TVL': `$${pool.tvl}`,
                '24h Volume': `$${pool.volume24h}`,
                'Fees': `$${pool.fees24h}`,
                'APY': `${pool.apy}%`
            };
            console.log('Pool Information:', poolInfo);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

getPoolApr();