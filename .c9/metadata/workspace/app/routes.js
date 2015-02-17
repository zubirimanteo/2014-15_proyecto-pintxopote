{"changed":true,"filter":false,"title":"routes.js","tooltip":"/app/routes.js","value":"module.exports = function(app, passport) {\n\n\tvar Pintxo = require('../app/models/pintxo');//modelo\n\tvar User = require('../app/models/user');//modelo\n\tvar Bar = require('../app/models/bar');//modelo\n\tvar validator = require('email-validator');\n\n\t// =====================================\n\t// INDEX ========\n\t// =====================================\n\t\n\tapp.get('/', function(req, res) {\n\t\t\n\t\t//Si el usuario está logueado y no es \"undefined\" entra por aquí y se activan algunas opciones en el index\n\t\tif(req.isAuthenticated() && typeof req.user.local !== \"undefined\"){\n\t\t\n\t\t\tres.render('index.ejs', { \n\t\t\t\tnombre: req.user.local.nomUsuario,\n\t\t\t\timg: req.user.local.avatar,\n\t\t\t\tclase : 'visible', \n\t\t\t\tclase2: 'escondido',\n\t\t\t\tmessage : 'a',\n\t\t\t\tmessage2 : 'a'\n\t\t\t});\n\t\t//Si no está logueado pasamos otro tipo de variable\n\t\t}else{\n\t\t\t\n\t\t\tres.render('index.ejs', { \n\t\t\t\tnombre : '', \n\t\t\t\timg: '',\n\t\t\t\tclase  : 'escondido', \n\t\t\t\tclase2 : 'visible',\n\t\t\t\tmessage : req.flash('loginMessage'),\n\t\t\t\tmessage2 : req.flash('signupMessage')\n\t\t\t}); // Carga el index.ejs\n\t\t\t\n\t\t}\n\t\t\n\t});\n\n\tapp.get('/pintxos', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la colección Pintxos\n\t \tPintxo.find(function(err, pintxos) {\n\t \t\t\n \t\t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(pintxos);\n  \t\t\t\n\t\t});\n\t\t\n\t});\n\t\n\tapp.get('/usuarios', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la collección Pintxos\n\t \tUser.find(function(err, usuarios) {\n\t \t\t\n \t\t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(usuarios);\n  \t\t\t\n\t\t});\n\t\t\n\t});\n\t\n\t\n\tapp.get('/bares', function (require, response) {\n\t\t\n\t \tBar.find(function(err, bares) {\n\t \t\t\n \t\t\tif (err) return console.error(err);\n  \t\t\tresponse.send(bares);\n  \t\t\t\n\t\t});\n\t\t\n\t});\n\t\n\t// =====================================\n\t// API ===============================\n\t// =====================================\n\t// Aquí se gestiona la API interna\n\t\n\t//muestra por el pintxo por orden de registro\n\tapp.get('/pintxosDatos', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la collección Pintxos\n\t \tPintxo.find({}, '-_id nombre descripcion', function(err, pintxos) {\n\t \t\t\n\t \t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(pintxos);\n  \t\t});\n\t});\n\t\n\t//muestra por el pintxo por orden de registro\n\tapp.get('/pintxosDatos/:numero', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la collección Pintxos\n\t \tPintxo.find(function(err, pintxos) {\n\t \t\t\n\t \t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(pintxos[require.params.numero].nombre);\n  \t\t});\n\t});\n\t\n\t//muestra por el pintxo por nombre\n\tapp.get('/pintxosDatos/nombre/:nombre', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la collección Pintxos\n\t \tPintxo.find({'nombre': require.params.nombre}, '-_id nombre descripcion', function(err, pintxos) {\n\t\t\t\n\t \t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(pintxos);\n  \t\t\t\n  \t\t});\n\t});\n\t\n\t\n\t//muestra todos los bares\n\tapp.get('/baresDatos', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la collección Pintxos\n\t \tBar.find({}, '-_id nombre coordX coordY', function(err, bares) {\n\t \t\t\n\t \t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(bares);\n  \t\t});\n\t});\n\t\n\t//muestra los bares por el número seleccionado\n\tapp.get('/baresDatos/numero/:numero', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la collección Pintxos\n\t \tBar.find(function(err, bares) {\n\t \t\t\n\t \t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(bares[require.params.numero].nombre);\n  \t\t});\n\t});\n\t\n\t//muestra los datos por el nombre\n\tapp.get('/baresDatos/nombre/:nombre', function (require, response) {\n\t\t//Hacemos un find en la base de datos de la collección Pintxos\n\t \tBar.find({'nombre': require.params.nombre}, '-_id nombre coordX coordY', function(err, bares) {\n\t\t\t\n\t \t\tif (err) return console.error(err);\n \t\t\t//Obtenemos un array de pintxos (objetos json)\n  \t\t\tresponse.send(bares);\n  \t\t\t\n  \t\t});\n\t});\n\t\n\t// =====================================\n\t// LOGIN ===============================\n\t// =====================================\n\t// Muestra el formulario del login\n\t/*app.get('/login', function(req, res) {\n\n\t\t// carga la página de inicio de sesión y muestra un mensaje en caso de error al registrarse\n\t\tres.render('login.ejs', { message: req.flash('loginMessage')});\n\t\t\n\t});*/\n\n\t// =====================================\n\t// SIGNUP ==============================\n\t// =====================================\n\t// Muestra el formulario de registro\n\tapp.get('/signup', function(req, res) {\n\t\t// carga la página de registro y muestra un mensaje en caso de error al registrarse\n\t\tres.render('signup.ejs', { message: req.flash('signupMessage')});\n\t});\n\t\n\t// Muestra el formulario del login de la parte de administracion\n\tapp.get('/admin', function(req, res) {\n\n\t\t// carga la página de inicio de sesión y muestra un mensaje en caso de error al registrarse\n\t\tres.render('admin.ejs', { message: req.flash('loginMessage')});\n\t\t\n\t});\n\t\n\t//Parte de administracion de pintxos\n\tapp.get('/administracion', isLoggedIn, function(req, res) {\n\t\tres.render('administracion.ejs');\n\t});\n\t\n\t\n\t\n\t// =====================================\n\t// PROFILE SECTION =====================\n\t// =====================================\n\t// Para entrar en la sección de profile, hacemos que sea obligatorio estar logeado usando la función 'isLoggedIn'\n\t// we will use route middleware to verify this (the isLoggedIn function)\n\tapp.get('/profile', isLoggedIn, function(req, res) {\n\t\t\n\t\tres.render('profile.ejs', {\n\t\t\tuser : req.user // get the user out of session and pass to template\n\t\t});\n\n\t});\n\t\n\tapp.get('/edita-pintxos', isLoggedIn, function(req, res){\n\t\t\t\t\n\t\tPintxo.find({},function(err, pintxo){\n\t\t\t//Si existe un error\n\t\t\tif(err){\n\t\t\t\t//Muestra por consola\n\t\t\t\tconsole.log(err);\n\t\t\t\tres.render('error');\n\t\t\t}\n\t\t\telse{\n\t\t\t\t//Pasamos a la variable pintxos el pintxo\n\t\t\t\tres.render('edita-pintxos.ejs', {\n\t\t\t\t\tpintxos: pintxo\n\t\t\t\t});\n\t\t\t//Cierre de else\n\t\t\t}\n\t\t\t//Cierre del find\n\t\t});\n\t});\n\t\n\t//Añadir un pintxo a la colección de pintxos\n\tapp.post('/edita-pintxos', isLoggedIn, function(req, res) {\n\t\t\n\t\tif (req.body.nombre.length > 20 || req.body.descripcion.length > 140) {\n\n\t\t\tif (req.body.nombre.length > 20) {\n\t\t\t\tconsole.log(\"El nombre es demasiado largo. (max. 20)\");\n\t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t}\n\t\t\tif (req.body.descripcion.length > 140) {\n\t\t\t\tconsole.log(\"La descripcion es demasiado larga. (max. 140)\");\n\t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t}\n\t\t\t\n\t\t}\n\t\telse {\t\n\t\t\t\n\t\t\t//Creamos una variable para crear un objeto de tipo Pintxo\n\t\t\tvar pintxo = new Pintxo ({\n\t\t\t\tnombre: req.body.nombre,\n\t\t\t\tdescripcion: req.body.descripcion,\n\t\t\t\timg: req.body.img,\n\t\t\t});\n\t\n\t\n\t\t\t//Para guardar dicha instancia en la base de datos\n\t\t\tpintxo.save(function (err, pintxo) {\n\t\n\t\t\t  \t//Si existe un error\n\t\t\t\tif(err){\n\t\t\t\t\t\n\t\t\t\t\t//Muestra por consola el error\n\t\t\t    \tconsole.log('ERROR: ' + err);\n\t\t\t    \t\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t//Muestra el mensaje por consola\n\t  \t\t\t\tconsole.log(pintxo.nombre + ' ha sido guardado.');\n\t\t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t\t}\n\t\t\t});\n\t\t\n\t\t}\n\t\t\n\t});\n\t\n\t//Permitimos a los usuarios emitir un voto a cada pintxo, controlamos que cada pintxo solo sea votado una vez por persona y siempre y cuando sea un usuario registrado\n\tapp.post('/emiteVoto', isLoggedIn, function (req, res) {\n\t    console.log('id pintxo: '+req.body.id);\n\t\tconsole.log('id usuario: '+req.user._id);\n\t\t\n\t\tvar existePintxo = false;\n\t\t\n\t\t//Buscamos el usuario que ha hecho click en el pintxo en la BD\n\t\tUser.find({_id:req.user._id}, function(err, user) {\n\t\t\t\t\t\n\t\t\t\t\t//recorremos los campos del usuario\n\t\t\t\t\tuser.forEach(function(element, index, array) {\n\t\t\t\t\t\t\n\t\t\t\t\t\t//recorremos el campo de pintxos votados que es un array \n\t\t\t\t\t\telement.local.pintxosVotados.forEach(function(element2, index, array) {\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tconsole.log(\"pintxos\" + element2);\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t//si el id del pintxo a votar existe en el campo pintxos votados este no se puede votar\n\t\t\t\t\t\t\tif(element2 == req.body.id){\n\t\t\t\t\t\t\t\texistePintxo = true;\n\t\t\t\t\t\t\t\tconsole.log(\"El pintxo con id está votado: \"+existePintxo);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\tif (!existePintxo && index === array.length - 1) {\n\t\t\t\t\t\t\n\t\t\t\t\t\t\tconsole.log(\"fin de array \" + \"existePintxo: \"+existePintxo);\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tPintxo.update({_id: req.body.id}, {media: req.body.med, votos: req.body.votes, puntos: req.body.punt}, null, function (err) {\n\t\t\t\n\t\t\t\t\t\t\t\t\t//Si hay error\n\t\t\t\t\t\t\t\t\tif (err){\n\t\t\t\t\t\t\t\t      \t//Muestra por consola el error\n\t\t\t\t\t\t\t\t    \tconsole.log('ERROR: ' + err);\n\t\t\t\t\t\t\t\t    }else{\n\t\t\t\t\t\t\t\t    \t//redireccionamos a la página /edita-pintxos\n\t\t\t\t\t\t\t\t    \tconsole.log('entra');\n\t\t\t\t\t\t\t\t    \tres.redirect('/');\n\t\t\t\t\t        \t\t\t\n\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tUser.findById(req.user._id, function(err, user) {\n\t\t\t\t\t\t\t       if(err){\n\t\t\t\t\t\t\t\t       console.log(err);\n\t\t\t\t\t\t\t       }else{\n\t\t\t\t\t\t\t       \t\t\n\t\t\t\t\t\t\t       \t\tuser.local.pintxosVotados.push(req.body.id);\n\t\t\t\t\t\t\t       \t\t\n\t\t\t\t\t\t\t       \t\tuser.save (function (err, pintxo) {\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t  \t//Si existe un error\n\t\t\t\t\t\t\t\t\t\t\tif(err){\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t//Muestra por consola el error\n\t\t\t\t\t\t\t\t\t\t    \tconsole.log('ERROR: ' + err);\n\t\t\t\t\t\t\t\t\t\t    \t\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t\t\t\t\t\t\tconsole.log('Agregado');\n\t\t\t\t\t\t\t\t        \t    console.log('id pintxo2: '+req.body.id);\n\t\t\t\t\t\t\t\t\t\t\t\tconsole.log('id usuario2: '+req.user._id);\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t    \t}\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t});\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t});\n\t\t\n\t    \n\t    \n\t});\n\t\n\t//Añadir un pintxo a la colección de pintxos\n\tapp.post('/actualiza-pintxos',  isLoggedIn, function(req, res) {\n\t\t\n\t\tif (req.body.nombreP.length > 50 || req.body.descripcionP.length > 140) {\n\n\t\t\tif (req.body.nombreP.length > 50) {\n\t\t\t\tconsole.log(\"El nombre es demasiado largo. (max. 20)\");\n\t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t}\n\t\t\tif (req.body.descripcionP.length > 140) {\n\t\t\t\tconsole.log(\"La descripcion es demasiado larga. (max. 140)\");\n\t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t}\n\t\t\t\n\t\t}\n\t\telse {\t\n\t\t\n\t\t\tPintxo.update({_id: req.body._id}, {nombre: req.body.nombreP, descripcion: req.body.descripcionP, img: req.body.imgP}, null, function (err) {\n\t\n\t\t\t\t//Si hay error\n\t\t\t\tif (err){\n\t\t\t      \t//Muestra por consola el error\n\t\t\t    \tconsole.log('ERROR: ' + err);\n\t\t\t    }else{\n\t\t\t    \t//redireccionamos a la página /edita-pintxos\n\t\t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t\t\t\n\t\t\t    }\n\t\n\t\t\t//Cierre del mtodo update\n\t\t\t});\n\t\t\n\t\t}\n\t\t\n\t//Cierre de la función\n\t});\n\t\napp.post('/actualiza-usuarios', function(req, res) {\n\t\n\tvar existeNombre = false;\n\tvar existeEmail = false;\n\tvar formato = /^(?:[0-9]{2})?[0-9]{2}\\/[0-3]?[0-9]\\/[0-3]?[0-9]$/;\n\t\n\tUser.findById(req.user._id, function(err, user){\n\t\t\n\t\tif (!user) { \n\t\t\treturn next(new Error('Could not load Document'));\n\t\t} \n\t\telse {\n\n\t\t\tif (req.body.username.length > 10 || req.body.username.length < 3 || !validator.validate(req.body.email) || !formato.test(req.body.birthday) || req.body.email.length > 50) {\n\n\t\t\t\tif (req.body.username.length > 10 || req.body.username.length < 3) {\n\t\t\t\t\tconsole.log(\"El nombre debe tener entre 3 y 10 caracteres.\");\n\t\t\t\t\tres.redirect('/profile');\n\t\t\t\t}\n\t\t\t\t/*if (req.body.password.length > 8) {\n\t\t\t\t\tconsole.log(\"La contraseña es demasiado larga. (max. 140)\");\n\t\t\t\t\tres.redirect('/profile');\n\t\t\t\t}*/\n\t\t\t\tif (!validator.validate(req.body.email)) {\n\t\t\t\t\tconsole.log(\"El email no es válido.\");\n\t\t\t\t\tres.redirect('/profile');\n\t\t\t\t}\n\t\t\t\tif (!formato.test(req.body.birthday)) {\n\t\t\t\t\tconsole.log(\"La fecha no es válida.\");\n\t\t\t\t\tres.redirect('/profile');\n\t\t\t\t}\n\t\t\t\tif (req.body.email.length > 50) {\n\t\t\t\t\tconsole.log(\"El email es demasiado largo. (max. 50c)\");\n\t\t\t\t\tres.redirect('/profile');\n\t\t\t\t}\n\t\t\t\t\n\t\t\t}\t\n\t\t\telse {\n\t\t\t\t\n\t\t\t\tUser.find({}, function(err, user) {\n\t\t\t\t\t\n\t\t\t\t\tuser.forEach(function(element, index, array) {\n\t\n\t\t\t\t\t\tif (element.local.nomUsuario == req.body.username && element.id != req.body.idUsuario) {\n\t\t\t\t\t\t\texisteNombre = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tif (element.local.email == req.body.email && element.id != req.body.idUsuario) {\n\t\t\t\t\t\t\texisteEmail = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tif (index == array.length - 1) {\n\t\t\t\t\t\t\tactualizar(existeNombre, existeEmail);\n\t\t\t\t\t\t}\n\t\t\n\t\t\t\t\t});\t\n\t\t\t\t\t\n\t\t\t\t});\n\t\t\t\t\n\t\t\t\tfunction actualizar(existeNom, existeEm) {\n\t\n\t\t\t\t\tif (!existeNom && !existeEm) {\n\t\t\t\t\t\t\n\t\t\t\t\t\tuser.local.nomUsuario = req.body.username;\n\t\t\t\t\t\tuser.local.email = req.body.email;\n\t\t\t\t\t\tuser.local.fechaNac = req.body.birthday;\n\t\t\t\t\t\t\n\t\t\t\t\t\tuser.save(function(err) {\n\t\t\t\t\t\t\tif (err)\n\t\t\t\t\t\t\t\tconsole.log('error');\n\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tres.redirect('/profile');\n\t\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\t//DE AQUI SE ENVIA EL ERROR SI YA EXISTE EL USUARIO\n\t\t\t\t\t\tif (existeNom) {\n\t\t\t\t\t\t\tconsole.log(\"ya existe el nombre\");\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (existeEm) {\n\t\t\t\t\t\t\tconsole.log(\"ya existe el email\");\n\t\t\t\t\t\t}\n\t\t\t\t\t\tres.redirect(\"/profile\")\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\t}\n\t\t\t\n\t\t}\n\t\t\n\t});\n\t\n});\n\t\n\tapp.post('/insertImg', isLoggedIn, function(req, res) {\n\n\t\tUser.findById(req.user._id, function(err, user) {\n\n\t\t\tuser.local.avatar = req.body.img;\n\t\t\t\n\t\t\tuser.save(function(err) {\n\t\t\t\t\n\t\t\t\tif (err)\n\t\t\t\t\tconsole.log('Error al guardar avatar');\n\t\t\t\telse {\n\t\t\t\t\tconsole.log('Avatar cambiado');\n\t\t\t\t}\n\t\t\t\t\n\t\t\t});\n\t\t\n\t\t});\n\t});\n\t\n\t\tapp.post('/anade-pintxos', isLoggedIn, function(req, res) {\n\t\t\t\n\t\t\tconsole.log(req.body.nombre);\n\t\t\t//Creamos una variable para crear un objeto de tipo Pintxo\n\t\t\tvar pintxo = new Pintxo ({\n\t\n\t\t\t\tnombre: req.body.nombre,\n\t\t\t\tdescripcion: req.body.descripcion,\n\t\t\t\timg: req.body.img,\n\t\t\t\tmedia: '0',\n\t\t\t\tvotos: '0',\n\t\t\t\tpuntos:'0'\n\t\t\t\t\n\t\t\t});\n\t\n\t\n\t\t\t//Para guardar dicha instancia en la base de datos\n\t\t\tpintxo.save(function (err, pintxo) {\n\t\n\t\t\t  \t//Si existe un error\n\t\t\t\tif(err){\n\t\t\t\t\t\n\t\t\t\t\t//Muestra por consola el error\n\t\t\t    \tconsole.log('ERROR: ' + err);\n\t\t\t    \t\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t//Muestra el mensaje por consola\n\t  \t\t\t\tconsole.log(pintxo.nombre + ' ha sido guardado.');\n\t\t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t\t}\n\t\t\t});\n\t});\n\t\t\n\t\t\n\n\t\n\tapp.post('/borra-pintxos',  isLoggedIn,function(req, res){\n\t\t\n\t\tPintxo.findByIdAndRemove(req.body.id, function (err, users) {\n \n    \t\t//Si existe un error\n\t\t\tif(err){\n\t\t\t\t\n\t\t\t\t//Muestra por consola el error\n\t\t    \tconsole.log('ERROR: ' + err);\n\t\t    \t\n\t\t\t}\n\t\t\telse{\n  \t\t\t\tres.redirect('/edita-pintxos');\n\t\t\t}\n \n  \t\t});\n\n\t});\n\n\t// =====================================\n\t// LOGOUT ==============================\n\t// =====================================\n\tapp.get('/logout', function(req, res) {\n\t\treq.logout();\n\t\tres.redirect('/');\n\t});\n\n\t// procesamos el formulario de registroedita-pi\n\tapp.post('/signup', passport.authenticate('local-signup', {\n\t\tsuccessRedirect : '/profile', // redirect to the secure profile section\n\t\tfailureRedirect : '/', // redirect back to the signup page if there is an error\n\t\tfailureFlash : true // allow flash messages\n\t}));\n\n\t// procesamos el formulario login\n\tapp.post('/login', passport.authenticate('local-login', {\n\t\tsuccessRedirect : '/profile',// redirect to the secure profile section\n\t\tfailureRedirect : '/', // redirect back to the signup page if there is an error\n\t\tfailureFlash : true // allow flash messages\n\t}));\n\t\n\t//////////BORRAR SI NO FUNCIONA PARA NADA////////////////////////\n\t// procesamos el formulario login\n\tapp.post('/admin', passport.authenticate('local-admin', {\n\t\tsuccessRedirect : '/administracion', // redirect to the secure profile section\n\t\tfailureRedirect : '/admin', // redirect back to the signup page if there is an error\n\t\tfailureFlash : true // allow flash messages\n\t}));\n\t////////////////////////////////////////////////////////////////\n\t\n\tapp.get('/about', function(req, res){\n\t\tres.render('about.ejs');\n\t});\n\t\n\tapp.get('/api', function(req, res){\n\t\tres.render('api.ejs');\t\n\t});\n\t\n};\n\n// esta es la función utilizada para verificar que un usuario está autentificado\nfunction isLoggedIn(req, res, next) {\n\t// Si el usuario está autentificado, sigue adelante \n\tif (req.isAuthenticated())\n\t\treturn next();\n\n\t// si no ha accedido, redirecciona al inicio\n\tres.redirect('/');\n}\n","undoManager":{"mark":-96,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":13,"column":77},"end":{"row":13,"column":78},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":78},"end":{"row":13,"column":79},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":79},"end":{"row":13,"column":80},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":80},"end":{"row":13,"column":81},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":81},"end":{"row":13,"column":82},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":82},"end":{"row":13,"column":83},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":83},"end":{"row":13,"column":84},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":84},"end":{"row":13,"column":85},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":85},"end":{"row":13,"column":86},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":86},"end":{"row":13,"column":87},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":87},"end":{"row":13,"column":88},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":88},"end":{"row":13,"column":89},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":89},"end":{"row":13,"column":90},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":90},"end":{"row":13,"column":91},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":91},"end":{"row":13,"column":92},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":92},"end":{"row":13,"column":93},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":93},"end":{"row":13,"column":94},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":94},"end":{"row":13,"column":95},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":95},"end":{"row":13,"column":96},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":96},"end":{"row":13,"column":97},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":97},"end":{"row":13,"column":98},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":98},"end":{"row":13,"column":99},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":99},"end":{"row":13,"column":100},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":100},"end":{"row":13,"column":101},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":100},"end":{"row":13,"column":101},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":100},"end":{"row":13,"column":101},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":101},"end":{"row":13,"column":102},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":102},"end":{"row":13,"column":103},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":103},"end":{"row":13,"column":104},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":104},"end":{"row":13,"column":105},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":105},"end":{"row":13,"column":106},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":105},"end":{"row":13,"column":106},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":104},"end":{"row":13,"column":105},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":104},"end":{"row":13,"column":105},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":105},"end":{"row":13,"column":106},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":106},"end":{"row":13,"column":107},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":107},"end":{"row":13,"column":108},"action":"insert","lines":["z"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":108},"end":{"row":13,"column":109},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":108},"end":{"row":13,"column":109},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":107},"end":{"row":13,"column":108},"action":"remove","lines":["z"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":107},"end":{"row":13,"column":108},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":1},"end":{"row":24,"column":2},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":2},"end":{"row":24,"column":3},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":3},"end":{"row":24,"column":4},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"insert","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":5},"end":{"row":24,"column":6},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":6},"end":{"row":24,"column":7},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":7},"end":{"row":24,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":8},"end":{"row":24,"column":9},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":9},"end":{"row":24,"column":10},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":10},"end":{"row":24,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":11},"end":{"row":24,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":12},"end":{"row":24,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":13},"end":{"row":24,"column":14},"action":"insert","lines":["á"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":14},"end":{"row":24,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":15},"end":{"row":24,"column":16},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":29},"end":{"row":24,"column":30},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":31},"end":{"row":24,"column":32},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":32},"end":{"row":24,"column":33},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":33},"end":{"row":24,"column":34},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":34},"end":{"row":24,"column":35},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":35},"end":{"row":24,"column":36},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":37},"end":{"row":24,"column":38},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":38},"end":{"row":24,"column":39},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":39},"end":{"row":24,"column":40},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":40},"end":{"row":24,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":41},"end":{"row":24,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":42},"end":{"row":24,"column":43},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":43},"end":{"row":24,"column":44},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":44},"end":{"row":24,"column":45},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":45},"end":{"row":24,"column":46},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":46},"end":{"row":24,"column":47},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":47},"end":{"row":24,"column":48},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":48},"end":{"row":24,"column":49},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":49},"end":{"row":24,"column":50},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":50},"end":{"row":24,"column":51},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":51},"end":{"row":24,"column":52},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":52},"end":{"row":24,"column":53},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":48},"end":{"row":41,"column":49},"action":"remove","lines":["l"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":1},"end":{"row":10,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1423827944000}