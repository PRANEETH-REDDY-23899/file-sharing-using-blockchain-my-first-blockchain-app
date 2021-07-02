//Import Contractconst DStorage = artifacts.require("DStorage");
const Migrations = artifacts.require("DStorage");

module.exports = function(deployer) {
	//Deploy Contract
	deployer.deploy(Migrations);
};
