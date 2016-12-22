'use strict';
var db = require('./connexion.js').db;

var Etudiant = db.define('etudiants', {
    id_etu : {type: 'serial', key : true},
    nom    : String,
    prenom : String,
    email  : String,
    login  : String,
    responsable : Boolean,
    nbre_abscence : {type : 'integer'}
    });
Etudiant.sync(function (err) {
    !err && console.log("Done!");
);
exports.Etudiant = Etudiant;