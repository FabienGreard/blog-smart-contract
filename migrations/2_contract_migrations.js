var Chevalier = artifacts.require("./Chevalier.sol");

module.exports = function(deployer) {
  deployer.deploy(Chevalier);
};
