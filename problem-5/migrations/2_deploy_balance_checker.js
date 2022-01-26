const BalanceChecker = artifacts.require("BalanceChecker");

module.exports = function(deployer) {
    deployer.deploy(BalanceChecker);
    // Can deploy more here
}