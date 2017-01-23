// Checks Web3 support
if(typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
    // If there's a web3 library loaded, then make your own web3
    web3 = new Web3(web3.currentProvider);
} else if (typeof Web3 !== 'undefined') {
    // If there isn't then set a provider
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
} else if(typeof web3 == 'undefined') {
    // Alert the user he is not in a web3 compatible browser
    return;
}

//initialize the account
EthAccounts.init()
//initialize the session with default value
defaultSessionVars();
