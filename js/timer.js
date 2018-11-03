(function(){


	var _id="0431c4dc9448d4d7714d0cdd064dc696";
	while(document.getElementById("timer"+_id))_id=_id+"0";
	document.write("<div id='timer"+_id+"' style='min-width:336px;height:100px;'></div>");
	var _t=document.createElement("script");

	_t.src="js/timer.min.js";

	var _f=function(_k){
		var l=new MegaTimer(_id, {
			"view":[1,1,1,0],
			"type":{
				"currentType":"3",
				"params":{
					"weekdays":[1,1,1,1,1,1,1],
					"usertime":true,
					"time":"00:00",
					"tz":-180,
					"hours":"1",
					"minutes":"1"
				}
			}
			,"design":{
				"type":"circle",
				"params":{
					"width":"3",
					"radius":"46",
					"line":"solid",
					"line-color":"#ffffff",
					"background":"solid",
					"background-color":"rgba(255,255,255,0.07)",
					"direction":"direct",
					"number-font-family":{
						"family":"Comfortaa",
						"link":"<link href='https://fonts.googleapis.com/css?family=Comfortaa:300,400,700&amp;subset=cyrillic,cyrillic-ext' rel='stylesheet' type='text/css'>"
					},
					"number-font-size":"32",
					"number-font-color":"#ffffff",
					"separator-margin":"9",
					"separator-on":false,
					"separator-text":":",
					"text-on":true,
					"text-font-family":{
						"family":"Comfortaa",
						"link":"<link href='https://fonts.googleapis.com/css?family=Comfortaa:300,400,700&amp;subset=cyrillic,cyrillic-ext' rel='stylesheet' type='text/css'>"
					},
					"text-font-size":"19",
					"text-font-color":"#ffffff"
				}
			},
			"designId":7,
			"theme":"black",
			"width":336,
			"height":100
		});
		if(_k!=null)l.run();
	};
	_t.onload=_f;
	_t.onreadystatechange=function(){
		if(_t.readyState=="loaded")_f(1);
	};
	var _h=document.head||document.getElementsByTagName("head")[0];_h.appendChild(_t);
}).call(this);