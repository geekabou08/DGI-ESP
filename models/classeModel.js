'use strict';
var db = require('./connexion.js').db;

Classe =  db.define('classe', {
    id_classe : {type : 'serial', key:true},
    nom : String,

});
Classe.sync(function (err) {
    console.log("Done!") && !err;
    );
exports.Classe =  Classe ;