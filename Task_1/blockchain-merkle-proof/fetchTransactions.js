const Web3 = require('web3').default;
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/QY2rToyyc7pb0j2GEyu6xmj-Lx079JYL');

async function getBlockTransactions(blockNumber) {
    const block = await web3.eth.getBlock(blockNumber, true);
    const transactions = block.transactions.map(tx => tx.hash);
    console.log(transactions);
    return transactions;
}

getBlockTransactions(7037663);
