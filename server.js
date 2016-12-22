'use strict' ;
/*
Inclusion des module de gestion de la base de données
*/
var express = require('express');
//var bodyParser = require('body-parser');
var sha1 = require('sha1');
var app = express();

//Relier les modeles

var Prof = require('./models/professeurModel.js').Prof;
var Etudiant = require('./models/etudiantModel.js').Etudiant;
var Classe = require('./models/classeModel.js').Classe;
var Login = require('./models/loginModel.js').Login;



app.listen(3000);