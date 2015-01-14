{"filter":false,"title":"server.js","tooltip":"/server.js","ace":{"folds":[],"customSyntax":"javascript","scrolltop":413,"scrollleft":3,"selection":{"start":{"row":52,"column":61},"end":{"row":52,"column":63},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":28,"state":"start","mode":"ace/mode/javascript"}},"hash":"f91ea38e4d865f9fe15edf20e1baf47e9d99d108","undoManager":{"mark":17,"position":17,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":59,"column":41},"action":"insert","lines":["var express = require('express');","var app = express();","","//var conection = require('mongodb').MongoClient;","var passport = require('passport');","var flash \t = require('connect-flash');//muestra mensajes flash","var mongoose = require('mongoose');","","var morgan       = require('morgan');//muestra las peticiones y respuestas por consola","var cookieParser = require('cookie-parser');","var bodyParser   = require('body-parser');//necesario para recibir datos desde html","var session      = require('express-session');","","var configDB = require('./config/database.js');//con esta línea cargamos la url de la base de datos a la variable configDB","","// Conexión con BBDD ===============================================================","mongoose.connect(configDB.url, function(err, res){","\tif(!err){","\t\tconsole.log('Conectado a bbdd');","\t}\t","}); // conectar a la bbdd","","require('./config/passport')(passport); // pass passport for configuration","","app.use(express.static(__dirname + '/public'));","","// Configuración de la aplicación express","app.use(morgan('dev')); // muestra todas los requerimientos por consola","app.use(cookieParser()); // lee cookies (necesario para auth)","app.use(bodyParser()); // Obtiene información desde los formularios html","","app.set('view engine', 'ejs'); // aplica ejs como plantilla","","// required para passport ==========================================================","app.use(session({ secret: 'wendelmandanga' })); // session secret","app.use(passport.initialize());","app.use(passport.session()); // persistent login sessions","app.use(flash()); // muestra los mensajes flash en caso de error en el login","","// routes ======================================================================","require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport","","","//Servidor local ======================================================================","/*var server = app.listen(process.env.PORT || 3000, function() {","    console.log('Listening in port %d', server.address().port);","});*/","","","//Servidor Cloud9/OpenShift/local","var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 3000, ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || \"127.0.0.1\";","","app.listen(port, ip);","","","//servidor heroku","/*var port = process.env.PORT || 5000; // Use the port that Heroku provides or default to 5000","app.listen(port);*/","","console.log('Listening in port ' + port);"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":2},"end":{"row":19,"column":6},"action":"insert","lines":["else"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":6},"end":{"row":21,"column":2},"action":"insert","lines":["{","\t\t","\t}"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":2},"end":{"row":20,"column":6},"action":"insert","lines":["cons"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":6},"end":{"row":20,"column":7},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":2},"end":{"row":20,"column":7},"action":"remove","lines":["conso"]},{"start":{"row":20,"column":2},"end":{"row":20,"column":9},"action":"insert","lines":["console"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":9},"end":{"row":20,"column":13},"action":"insert","lines":[".log"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":10},"end":{"row":20,"column":13},"action":"remove","lines":["log"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":13},"action":"insert","lines":["log"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":13},"end":{"row":20,"column":15},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":14},"end":{"row":20,"column":16},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":15},"end":{"row":20,"column":17},"action":"insert","lines":["ER"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":17},"end":{"row":20,"column":20},"action":"insert","lines":["ROR"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":20},"end":{"row":20,"column":23},"action":"insert","lines":[" EN"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":23},"end":{"row":20,"column":26},"action":"insert","lines":[" LA"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":26},"end":{"row":20,"column":29},"action":"insert","lines":[" BD"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":28},"end":{"row":20,"column":30},"action":"insert","lines":["BD"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":33},"end":{"row":52,"column":62},"action":"remove","lines":["ocess.env.OPENSHIFT_NODEJS_PO"]},{"start":{"row":52,"column":33},"end":{"row":52,"column":62},"action":"insert","lines":["ocess.env.OPENSHIFT_NODEJS_PO"]}]}]]},"timestamp":1420714090000}