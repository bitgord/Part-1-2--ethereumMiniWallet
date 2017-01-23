defaultSessionVars = function() {
        var initialFundInfo = {ammount:0,fAddr:0x0,tAddr:0x0};

        Session.setDefault("sendEther.fundInfo", initialFundInfo);
        Session.setDefault("sendEther.estimatedGas", 0);
        Session.setDefault("sendEther.currentGasPrice", 0);

};
