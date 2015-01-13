module.exports = function(app, passport) {

	var Pintxo = require('../app/models/pintxo');//modelo
	var User = require('../app/models/user');//modelo
	var Bar = require('../app/models/bar');//modelo

	// =====================================
	// INDEX ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs'); // Carga el index.ejs
		
	});

	app.get('/pintxos', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Pintxo.find(function(err, pintxos) {
	 		
 			if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos);
  			
		});
		
	});
	
	app.get('/bares', function (require, response) {
		
	 	Bar.find(function(err, bares) {
	 		
 			if (err) return console.error(err);
  			response.send(bares);
  			
		});
		
	});
	
	// =====================================
	// LOGIN ===============================
	// =====================================
	// Muestra el formulario del login
	app.get('/login', function(req, res) {

		// carga la página de inicio de sesión y muestra un mensaje en caso de error al registrarse
		res.render('login.ejs', { message: req.flash('loginMessage')});
		
	});

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// Muestra el formulario de registro
	app.get('/signup', function(req, res) {
		// carga la página de registro y muestra un mensaje en caso de error al registrarse
		res.render('signup.ejs', { message: req.flash('signupMessage')});
	});
	
	// Muestra el formulario del login
	app.get('/admin', function(req, res) {

		// carga la página de inicio de sesión y muestra un mensaje en caso de error al registrarse
		res.render('admin.ejs', { message: req.flash('loginMessage')});
		
	});
	
	
	
	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// Para entrar en la sección de profile, hacemos que sea obligatorio estar logeado usando la función 'isLoggedIn'
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});

	});
	
	
	app.get('/administracion', isLoggedIn, function(req, res) {
		res.render('administracion.ejs');
	});
	
	app.get('/edita-pintxos', isLoggedIn, function(req, res){
				
		Pintxo.find({},function(err, pintxo){
			//Si existe un error
			if(err){
				//Muestra por consola
				console.log(err);
				res.render('error');
			}
			else{
				//Pasamos a la variable pintxos el pintxo
				res.render('edita-pintxos.ejs', {
					pintxos: pintxo
				});
			//Cierre de else
			}
			//Cierre del find
		});
	});
	
	//Añadir un pintxo a la colección de pintxos
	app.post('/edita-pintxos',  isLoggedIn, function(req, res) {

		//Creamos una variable para crear un objeto de tipo Pintxo
		var pintxo = new Pintxo ({

			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			img: "default"//hasta que aprendamos a subir archivos se mantiene imagen por defecto

		});


		//Para guardar dicha instancia en la base de datos
		pintxo.save(function (err, pintxo) {

		  	//Si existe un error
			if(err){
				
				//Muestra por consola el error
		    	console.log('ERROR: ' + err);
		    	
			}
			else{
				//Muestra el mensaje por consola
  				console.log(pintxo.nombre + ' ha sido guardado.');
				res.redirect('/edita-pintxos');
			}
		});
		
	});
	
		//Añadir un pintxo a la colección de pintxos
	app.post('/actualiza-pintxos',  isLoggedIn,function(req, res) {
		
		console.log(req.body.nombre);
		console.log(req.body.descripcion);
		
		Pintxo.update({_id: req.body._id}, {nombre: req.body.nombre, descripcion: req.body.descripcion}, null, function (err) {

			//Si hay error
			if (err){
		      	//Muestra por consola el error
		    	console.log('ERROR: ' + err);
		    }else{
		    	//redireccionamos a la página /edita-pintxos
		    	console.log(req.body.id);
				res.redirect('/edita-pintxos')
		    }

		//Cierre del método update
		});
		
	//Cierre de la función
	});
	
//BORRAR SI NO FUNCSIONA//////////////////////////
    app.post('/actualiza-usuarios',  isLoggedIn, function(req, res) {
        
        //console.log("prueba"+" "+req.body.id);
        //console.log(req.body.username);


        User.findById(req.body.id, function(err, user){
            if (!user)
                return next(new Error('Could not load Document'));
            else {
                
                user.local.nomUsuario = req.body.username;
                user.local.email = req.body.email;
                user.local.sexo = req.body.gender;
                user.local.fechaNac = req.body.birthday;

                user.save(function(err) {
                    if (err)
                        console.log('error');
                    else
                        console.log('success');
                    res.redirect('/profile');
                });
            }
        });
        
        /*
        User.findById(req.body.id).lean().exec(function(err, p) {
          if (!p)
            return next(new Error('Could not load Document'));
          else {
            p = p.toJSON;
            User.update({_id: req.body.id},{$set:{nomUsuario: req.body.username, email: req.body.email, sexo: req.body.gender, fechaNac: req.body.birthday}}, function (err) {
            //Si hay error
            if (err){
                  //Muestra por consola el error
                console.log('ERROR: ' + err);
            }else{
                //redireccionamos a la página /edita-pintxos
                 res.redirect('/profile')
                 console.log('entra');
                 console.log(req.body.id);
                 console.log(p);
                console.log(req.body.username+" 2");

            }

        //Cierre del mtodo update
        });
    */
            /*
            p.save(function(err) {
              if (err)
                console.log('error')
              else
                console.log('success')
            });
          }
        });*/
        
        
        
    //Cierre de la función
    });
    ///////////////////////////////////////////////////////////////////
	
	
	app.post('/insertImg', isLoggedIn, function(req, res) {
		
		User.update({_id : req.body.id}, {$set: {avatar:"scvsdgsgfrsf"}}, { w: 1 }, function(){});
		
		
		
		
		/*console.log(req.body.id);
	
		User.findOne({_id: req.body.id}, function(err, user){

			console.log(user);

		
			User.update({_id : req.body.id}, { $set: { avatar: 'sdfsghetds' }}, { multi: true }, function() {
				console.log("user encontrado2");
			});
			
			
				
			User.save(function (err, pintxo) {});
			
			
		});*/
		
	});
		

	
	app.post('/borra-pintxos',  isLoggedIn,function(req, res){
		
		Pintxo.findByIdAndRemove(req.body.id, function (err, users) {
 
    			//Si existe un error
			if(err){
				
				//Muestra por consola el error
		    	console.log('ERROR: ' + err);
		    	
			}
			else{
				//Muestra el mensaje por consola
  				res.redirect('/edita-pintxos');
			}
 
  		});

	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// procesamos el formulario de registro
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// procesamos el formulario login
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	
	//////////BORRAR SI NO FUNCIONA PARA NADA////////////////////////
	// procesamos el formulario login
	app.post('/admin', passport.authenticate('local-admin', {
		successRedirect : '/administracion', // redirect to the secure profile section
		failureRedirect : '/admin', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	////////////////////////////////////////////////////////////////
};

// esta es la función utilizada para verificar que un usuario está autentificado
function isLoggedIn(req, res, next) {

	// Si el usuario está autentificado, sigue adelante 
	if (req.isAuthenticated())
		return next();

	// si no ha accedido, redirecciona al inicio
	res.redirect('/');
}
