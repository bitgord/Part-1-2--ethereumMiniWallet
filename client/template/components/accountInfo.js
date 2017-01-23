Template.accountBalanceComponent.helpers({
  accounts: function(){
    return EthAccounts.find({});
  }
});

Template.accountBalanceItem.helpers({
  name: function(){
    return this.name;
  },
  address: function(){
    return this.address;
  },
  balance: function(){
    var balanceEth = web3.fromWei(this.balance, "ether");
    return parseFloat(balanceEth).toFixed(3);
  }
});
