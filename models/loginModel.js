'use strict';
var db = require('./connexion.js').db;

var Login = db.define('login',{
    login : { type: 'String', key: true },
    password : String,
    role : ['Professeur', 'Etudiant']
});
Login.sync(function(err) {
    !err  && console.log("Done!");
    });

//exports.Login = Login;