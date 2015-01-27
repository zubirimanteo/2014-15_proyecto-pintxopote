{"changed":true,"filter":false,"title":"validadorLoginAdmin.js","tooltip":"/public/js/validadorLoginAdmin.js","value":"$(document).ready(function() {\n    $('#registrationForm').bootstrapValidator({\n        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later\n        /*feedbackIcons: {\n            valid: 'glyphicon glyphicon-ok',\n            invalid: 'glyphicon glyphicon-remove',\n            validating: 'glyphicon glyphicon-refresh'\n        },*/ //Nota Borja: mirar porque no funcionan los glyphicon con bootstrap\n        fields: {\n            email: {\n                validators: {\n                    notEmpty: {\n                        message: 'No puedes dejar el email vacío'\n                    },\n                    emailAddress: {\n                        message: 'No es un formato de email válido'\n                    }\n                }\n            },\n            password: {\n                validators: {\n                    notEmpty: {\n                        message: 'No puedes dejar el password vacío'\n                    },\n                    different: {\n                        field: 'username',\n                        message: 'El password no puede ser el mismo que el nombre de usuario'\n                    },\n                    stringLength: {\n                        min: 8,\n                        max: 20,\n                        message: 'password 8-20 characters'\n                    }\n                }\n            }\n        }\n    });\n});","undoManager":{"mark":11,"position":67,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":["function validarEmail(){","    ","    var string1=document.login.email.value;","    ","    if (string1.indexOf(\"@\")==-1){","        alert(\"Please input a valid email address!\");","    }","    ","}"]},{"start":{"row":0,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["$(document).ready(function() {","    $('#registrationForm').bootstrapValidator({","        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later","        /*feedbackIcons: {","            valid: 'glyphicon glyphicon-ok',","            invalid: 'glyphicon glyphicon-remove',","            validating: 'glyphicon glyphicon-refresh'","        },*/ //Nota Borja: mirar porque no funcionan los glyphicon con bootstrap","        fields: {","            email: {","                validators: {","                    notEmpty: {","                        message: 'No puedes dejar el email vacío'","                    },","                    emailAddress: {","                        message: 'No es un formato de email válido'","                    }","                }","            },","            password: {","                validators: {","                    notEmpty: {","                        message: 'No puedes dejar el password vacío'","                    },","                    different: {","                        field: 'username',","                        message: 'El password no puede ser el mismo que el nombre de usuario'","                    },","                    stringLength: {","                        min: 4,","                        message: 'El password debe tener como mínimo 4 caracteres'","                    }","                }","            }","        }","    });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"remove","lines":["4"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":31},"end":{"row":30,"column":0},"action":"insert","lines":["",""]},{"start":{"row":30,"column":0},"end":{"row":30,"column":24},"action":"insert","lines":["                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":26},"end":{"row":30,"column":27},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":34},"end":{"row":31,"column":81},"action":"remove","lines":["El password debe tener como mínimo 4 caracteres"]},{"start":{"row":31,"column":34},"end":{"row":31,"column":35},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":35},"end":{"row":31,"column":36},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":36},"end":{"row":31,"column":37},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":37},"end":{"row":31,"column":38},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":38},"end":{"row":31,"column":39},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":39},"end":{"row":31,"column":40},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":40},"end":{"row":31,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":41},"end":{"row":31,"column":42},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":42},"end":{"row":31,"column":43},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":42},"end":{"row":31,"column":43},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":41},"end":{"row":31,"column":42},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":40},"end":{"row":31,"column":41},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":39},"end":{"row":31,"column":40},"action":"remove","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":39},"end":{"row":31,"column":40},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":40},"end":{"row":31,"column":41},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":41},"end":{"row":31,"column":42},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":42},"end":{"row":31,"column":43},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"insert","lines":["a"]},{"start":{"row":31,"column":46},"end":{"row":31,"column":47},"action":"insert","lines":["s"]},{"start":{"row":31,"column":47},"end":{"row":31,"column":48},"action":"insert","lines":["d"]},{"start":{"row":31,"column":48},"end":{"row":31,"column":49},"action":"insert","lines":["b"]},{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"insert","lines":["v"]},{"start":{"row":31,"column":50},"end":{"row":31,"column":51},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"insert","lines":["s"]},{"start":{"row":31,"column":52},"end":{"row":31,"column":53},"action":"insert","lines":["d"]},{"start":{"row":31,"column":53},"end":{"row":31,"column":54},"action":"insert","lines":["b"]},{"start":{"row":31,"column":54},"end":{"row":31,"column":55},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":55},"end":{"row":31,"column":56},"action":"insert","lines":["b"]},{"start":{"row":31,"column":56},"end":{"row":31,"column":57},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":57},"end":{"row":31,"column":58},"action":"insert","lines":["s"]},{"start":{"row":31,"column":58},"end":{"row":31,"column":59},"action":"insert","lines":["f"]},{"start":{"row":31,"column":59},"end":{"row":31,"column":60},"action":"insert","lines":["n"]},{"start":{"row":31,"column":60},"end":{"row":31,"column":61},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":61},"end":{"row":31,"column":62},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":62},"end":{"row":31,"column":63},"action":"insert","lines":["b"]},{"start":{"row":31,"column":63},"end":{"row":31,"column":64},"action":"insert","lines":["f"]},{"start":{"row":31,"column":64},"end":{"row":31,"column":65},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":65},"end":{"row":31,"column":66},"action":"insert","lines":["x"]},{"start":{"row":31,"column":66},"end":{"row":31,"column":67},"action":"insert","lines":["b"]},{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":68},"end":{"row":31,"column":69},"action":"insert","lines":["b"]},{"start":{"row":31,"column":69},"end":{"row":31,"column":70},"action":"insert","lines":["v"]},{"start":{"row":31,"column":70},"end":{"row":31,"column":71},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":43},"end":{"row":31,"column":60},"action":"remove","lines":["8qasdbvgsdbgbfsfn"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":47},"action":"remove","lines":["bbf"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":42},"end":{"row":31,"column":43},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":42},"end":{"row":31,"column":43},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":46},"end":{"row":31,"column":47},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":47},"end":{"row":31,"column":48},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":48},"end":{"row":31,"column":49},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":50},"end":{"row":31,"column":51},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":52},"end":{"row":31,"column":53},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":53},"end":{"row":31,"column":54},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":54},"end":{"row":31,"column":55},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":55},"end":{"row":31,"column":56},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":56},"end":{"row":31,"column":57},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":57},"end":{"row":31,"column":58},"action":"insert","lines":["s"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":31,"column":58},"end":{"row":31,"column":58},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422347113756}