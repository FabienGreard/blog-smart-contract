pragma solidity ^0.4.18; /* Spécifier la version de solidity pour la compilation */

contract chevalier  {
    /* On définit le nom de notre chevalier dans une variable de type string */
    string nom;

    /* On assigne un nom à notre chevalier */
    function setNom(string _nom) public {
        nom = _nom;
    }

    /* On récupère le nom de notre chevalier */
    function getNom() constant public returns (string) {
        return nom;
    }
}
