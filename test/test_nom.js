var Chevalier = artifacts.require("Chevalier");

contract('Chevalier', function(accounts) {
  it("setNom", function() {
    return Chevalier.deployed().then((instance) => {
      return instance.setNom("Yvain");
    }).then(() => {
      assert.isTrue(true);
    }).catch(err => {
      assert.isTrue(false, err);
    });
  });
  it("getNom", function() {
    return Chevalier.deployed().then((instance) => {
      return instance.getNom.call();
    }).then((nom) => {
      assert.equal(nom, "Yvain", "ne corresponds pas à Yvain");
    });
  });
});
