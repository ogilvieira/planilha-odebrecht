var Generator = (function(){
	var obj = {};
	var RESULT = {};
	obj.config = {
		first_name : 'Fulano',
		gender : 'male',
		uid : 0
	};
	var RESULT_tpl = "<figure class=\"avatar\"><img src=\"{{avatar}}\"></figure><h2 class=\"name\">{{name}}</h2><div class=\"description\">{{description}}</div><div class=\"prices\">Quanto embolsou: <strong>R$ {{money}}</strong></div>";	

	obj.getRandomInt = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
	
	obj.getPhoto = function(uid){ return "http://graph.facebook.com/"+uid+"/picture?type=large"; };

	obj.getResult = function(){
		var tempObjProfile = DATA.profile[obj.config.gender][obj.getRandomInt(0, (DATA.profile[obj.config.gender].length-1))];

		RESULT = {};
		RESULT.avatar = obj.getPhoto(obj.config.uid);
		RESULT.name = obj.config.first_name+" "+tempObjProfile.nick;
		RESULT.description = tempObjProfile.description;
		RESULT.money = obj.getRandomInt(0, 10e9);

		var html = Mustache.to_html(RESULT_tpl, RESULT);
		$('#intro').addClass('is-inactive');
		$('#result').removeClass('is-inactive').find('.result-wrap').html(html);
		$('#result').find('.btn-rand').on('click', function(e){
			e.preventDefault();
			obj.getResult();
		});
	};

	obj.init = function(config){
		obj.config = $.extend( {}, obj.config, config );
		console.log(obj.config);
		obj.getResult();
	};
	return obj;
}());