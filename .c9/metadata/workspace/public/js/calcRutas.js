{"changed":false,"filter":false,"title":"calcRutas.js","tooltip":"/public/js/calcRutas.js","value":"//Script que hace peticiones de bares al servidor, los clasifica por rutas\n//e imprime en el mapa ya existente una ruta que conecta los bares de la misma\n\n//El script se ejecuta desde la carga de página\n$(document).ready(function() {\n    \n    //Al hacer clic sobre uno de los botones de rutas\n    $('#btn1, #btn2, #btn3').click(function() { \n       \n        //Creamos una variable ruta, que indica cual es la ruta que vamos a imprimir\n        var ruta;\n        \n        //Damos valor a la ruta, dependiendo de cual es el botón concreto pulsado\n        if (this.id == \"btn1\") {\n            ruta = \"0\";\n        }\n        else if (this.id == \"btn2\") {\n            ruta = \"1\";\n        }\n        else {\n            ruta = \"3\";\n        }\n    \n        $.ajax({\n        \n        \ttype: \"GET\",    //Indicamos que se trata de una petición GET\n        \turl: \"/bares\",  //Accediendo a bares\n        \tdataType: \"json\",   \t//El tipo objeto que se espera recibir, en este caso json, un array de bares\n        \t\n        \t//Si la petición es correcta, se ejecutará el script de carga de ruta\n        \tsuccess: function(data) {\n        \t\t\n        \t\t//Le damos un pequeño timeOut, que solo es necesario si queremos cargar una ruta directamente al cargar la página\n        \t    setTimeout(function() {\n        \n                                            \t\t/*data.forEach(function(element, index, array) {\n                                            \t\t\t\n        //Este pedazo de código es para               \tmyLatlng = new google.maps.LatLng(element.coordX, element.coordY);\n        //poner puntos en el mapa sin rutas                                 \t\t\t\n                                            \t\t\tvar marker = new google.maps.Marker({\n        //Lo guardamos por si hace falta        \t\t\tposition: myLatlng,\n        //algún día                             \t\t\tmap : map,\n                                            \t\t\t\ttitle: element.nombre\n                                            \t\t\t});\n                                            \n                                            \t\t});*/\n            \t\t\n            \t\t\n            \t\t//Creamos un array vacío\n            \t\tvar arrayRuta = [];\n            \t\t\n            \t\t//Por cada elemento recogido en \"data\"\n            \t\tdata.forEach(function(element, index, array) {\n            \t\t    \n            \t\t    //Por cada elemento \"ruta\" del elemento bar (en la BBDD, cada bar tiene un array de las rutas donde aparece)\n            \t\t    element.rutas.forEach(function(elemen, inde, array) {\n            \t\t        \n            \t\t        //Si en el array de rutas aparece la ruta que queremos imprimir \n            \t\t        if (elemen == ruta) {\n            \t\t       \n            \t\t            //Metemos en nuestro nuevo array el bar\n                    \t    \tarrayRuta.push(element);\n                    \t\t\n            \t\t        }\n            \t\t    \n            \t\t    });\n            \t\t    \n            \t\t    //De momento, la ruta 3 es la que contiene todos los bares, aunque en la BBDD ninguno esté en la 3\n            \t\t    if (ruta == \"3\") {\n            \t\t        arrayRuta.push(element);\n            \t\t    }\n            \t\t    \n            \t\t});\n            \t\t\n            \t\t\n            \t\t//Función que calculará la ruta\n                    function calcRoute() {\n                        \n                        //Creamos una variable start, con las coordenadas del primer bar de nuestra ruta\n                        var start =  new google.maps.LatLng(arrayRuta[0].coordX, arrayRuta[0].coordY);\n                        \n                        //Creamos una variable end, con las coordenadas del último bar de nuestra ruta\n                        var end =  new google.maps.LatLng(arrayRuta[arrayRuta.length - 1].coordX, arrayRuta[arrayRuta.length - 1].coordY);\n                        \n                        //Creamos un array vacío de waypoints\n                        var waypoints = [];\n                        \n                        //Si la ruta tiene más de 2 bares, metemos todos los centrales como waypoints de la ruta\n                        if (arrayRuta.length > 2) {\n                            \n                            //Por cada elemento del array de ruta\n                            arrayRuta.forEach(function(element, index, array) {\n                    \n                                //Si no es ni el primer bar ni el último\n                                if (index != 0 && index != arrayRuta.length - 1) {\n                        \n                                    //Metemos en el array de waypoints el bar\n                                    waypoints.push({\n                                        \n                                        //Le decimos que el punto se encuentra en las coordenadas del bar\n                                        location:new google.maps.LatLng(arrayRuta[index].coordX, arrayRuta[index].coordY),\n                                        \n                                        //Y le decimos que es una parada obligatoria de la ruta\n                                        stopover:true\n                                        \n                                    });\n                                    \n                                }\n                                \n                            });\n                            \n                        }\n                        \n                        //Creamos una variable con las opciones de la ruta\n                        var request = {\n                            \n                            origin:start,   //Le indicamos que el origen es el primer bar\n                            destination:end,    //El destino el último bar\n                            waypoints: waypoints,   //Tiene que pasar por cada bar del array de waypoints\n                            travelMode: google.maps.TravelMode.WALKING      //Y le decimos que queremos calcular la ruta andando\n                            \n                        };\n                        \n                        //Hacemos la peticion de ruta al servicio de Directions de Google Maps, pasandole las opciones definidas arriba\n                        directionsService.route(request, function(response, status) {\n                            \n                            //Si todo va bien con el servicio de Google\n                            if (status == google.maps.DirectionsStatus.OK) {\n                                \n                                //Le indicamos que no queremos que mueva el mapa al imprimir la ruta (si no, hace zoom y descoloca el mapa)\n                                directionsDisplay.setOptions({ \n                                    preserveViewport: true \n                                });\n                                \n                                //Imprimimos la ruta en el mapa\n                                directionsDisplay.setDirections(response);\n                                \n                            }\n                            \n                        });\n                    \n                    }\n                    \n                    //Llamamos al método de calcular ruta\n                    calcRoute();\n        \n                //Este es el tiempo de timeOut que le dimos al principio, 100ms \n        \t    }, 100);\n        \t\t\n        \t}\n        \n        });\n    \n    });\n    \n});","undoManager":{"mark":0,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":1038,"scrollleft":0,"selection":{"start":{"row":88,"column":48},"end":{"row":88,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":78,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1415690962000}