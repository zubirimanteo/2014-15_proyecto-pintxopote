{"changed":true,"filter":false,"title":"pintxos.js","tooltip":"/public/js/pintxos.js","value":"$(document).ready(function() {\t\n\n\t$.ajax({\n\n\t\ttype: \"GET\",\n\t\turl: \"/pintxos\",\n\t\tdataType: \"json\",\n\t\tsuccess: function(data){\n\n\t\t\tvar pintxos = \"<div class='pintxos_class'><h1>Pintxos</h1><h2>Degusta la variedad</h2><div class='articulos'>\";\n\n\t\t\tdata.forEach(function(element, index, array) {\t\t\t\t\n\t\t\t\t\n\t\t\t\tpintxos += \"<article><img src='img/\"+element.img+\".jpg'></img><h3>\"+element.nombre+\"</h3><p>\"+element.descripcion+\"</p></article>\";\t\t\t\t\t\n\n\t\t\t});\t\t\n\t\t\t\n\t\t\tpintxos += \"</div></div>\";\n\n\t\t\t$(\"#pintxos\").html(pintxos);\n\t\t\t\n\t\t}\n\n\t});         \t\n\n});","undoManager":{"mark":99,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":21},"end":{"row":9,"column":22}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":22},"end":{"row":9,"column":23}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":23},"end":{"row":9,"column":24}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":24},"end":{"row":9,"column":25}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":25},"end":{"row":9,"column":26}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":26},"end":{"row":9,"column":27}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":27},"end":{"row":9,"column":28}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":28},"end":{"row":9,"column":29}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":29},"end":{"row":9,"column":30}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":30},"end":{"row":9,"column":31}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":31},"end":{"row":9,"column":32}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":32},"end":{"row":9,"column":33}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":33},"end":{"row":9,"column":34}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":35},"end":{"row":9,"column":36}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":36},"end":{"row":9,"column":37}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":37},"end":{"row":9,"column":38}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":38},"end":{"row":9,"column":39}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":39},"end":{"row":9,"column":40}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":40},"end":{"row":9,"column":41}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":41},"end":{"row":9,"column":42}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":42},"end":{"row":9,"column":43}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":43},"end":{"row":9,"column":44}},"text":"'"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":44},"end":{"row":9,"column":45}},"text":">"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":29},"end":{"row":9,"column":30}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":29},"end":{"row":9,"column":30}},"text":"'"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":21},"end":{"row":17,"column":22}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":22},"end":{"row":17,"column":23}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":23},"end":{"row":17,"column":24}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":24},"end":{"row":17,"column":25}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":25},"end":{"row":17,"column":26}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":26},"end":{"row":17,"column":27}},"text":">"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":45},"end":{"row":9,"column":46}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":46},"end":{"row":9,"column":47}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":47},"end":{"row":9,"column":48}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":48},"end":{"row":9,"column":49}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":49},"end":{"row":9,"column":50}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":50},"end":{"row":9,"column":51}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":51},"end":{"row":9,"column":52}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":52},"end":{"row":9,"column":53}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":52},"end":{"row":9,"column":53}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":52},"end":{"row":9,"column":53}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":53},"end":{"row":9,"column":54}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":54},"end":{"row":9,"column":55}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":55},"end":{"row":9,"column":56}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":56},"end":{"row":9,"column":57}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":57},"end":{"row":9,"column":58}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":58},"end":{"row":9,"column":59}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":59},"end":{"row":9,"column":60}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":60},"end":{"row":9,"column":61}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":61},"end":{"row":9,"column":62}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":62},"end":{"row":9,"column":63}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":63},"end":{"row":9,"column":64}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":63},"end":{"row":9,"column":64}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":62},"end":{"row":9,"column":63}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":61},"end":{"row":9,"column":62}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":60},"end":{"row":9,"column":61}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":59},"end":{"row":9,"column":60}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":58},"end":{"row":9,"column":59}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":57},"end":{"row":9,"column":58}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":56},"end":{"row":9,"column":57}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":55},"end":{"row":9,"column":56}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":54},"end":{"row":9,"column":55}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":53},"end":{"row":9,"column":54}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":53},"end":{"row":9,"column":54}},"text":"'"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":54},"end":{"row":9,"column":55}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":55},"end":{"row":9,"column":56}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":56},"end":{"row":9,"column":57}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":57},"end":{"row":9,"column":58}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":58},"end":{"row":9,"column":59}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":59},"end":{"row":9,"column":60}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":60},"end":{"row":9,"column":61}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":61},"end":{"row":9,"column":62}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":62},"end":{"row":9,"column":63}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":63},"end":{"row":9,"column":64}},"text":"'"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":64},"end":{"row":9,"column":65}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":65},"end":{"row":9,"column":66}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":66},"end":{"row":9,"column":67}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":67},"end":{"row":9,"column":68}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":68},"end":{"row":9,"column":69}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":69},"end":{"row":9,"column":70}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":70},"end":{"row":9,"column":71}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":71},"end":{"row":9,"column":72}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":72},"end":{"row":9,"column":73}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":73},"end":{"row":9,"column":74}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":74},"end":{"row":9,"column":75}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":75},"end":{"row":9,"column":76}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":76},"end":{"row":9,"column":77}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":77},"end":{"row":9,"column":78}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":78},"end":{"row":9,"column":79}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":79},"end":{"row":9,"column":80}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":80},"end":{"row":9,"column":81}},"text":"'"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":81},"end":{"row":9,"column":82}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":82},"end":{"row":9,"column":83}},"text":">"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":70},"end":{"row":9,"column":71}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":70},"end":{"row":9,"column":71}},"text":"'"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":79},"end":{"row":9,"column":80}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":78},"end":{"row":9,"column":79}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":65},"end":{"row":9,"column":69}},"text":"href"},{"action":"insertText","range":{"start":{"row":9,"column":65},"end":{"row":9,"column":66}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":66},"end":{"row":9,"column":67}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":45},"end":{"row":9,"column":79}},"text":"<a name='pintxoskk' id='pintxos'/>"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":45},"end":{"row":9,"column":45},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":63,"mode":"ace/mode/javascript"}},"timestamp":1414759134015}