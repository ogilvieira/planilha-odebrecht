var Generator = (function(){
	var obj = {};	
	lowLag.init({'urlPrefix':'./assets/sound/'});
	lowLag.load("toasty.wav");
	lowLag.suspend = true;
	var japanese = $('.japanese');
	var isToasty = false;

	var RESULT = {};
	obj.config = {
		first_name : 'Fulano',
		gender : 'male',
		uid : 0
	};
	var RESULT_tpl = "<figure class=\"avatar\"><img src=\"{{avatar}}\"></figure><h2 class=\"name\">{{name}}</h2><div class=\"description\">{{description}}</div><div class=\"prices\">Quanto embolsou: <strong>{{money}}</strong></div>";	

	obj.getPhoto = function(uid){ return "http://graph.facebook.com/"+uid+"/picture?type=large"; };

	obj.getResult = function(){

		RESULT = {};
		if(!RESULT.avatar){
			RESULT.avatar = obj.getPhoto(obj.config.uid);
		}
		RESULT.name = obj.config.first_name+" "+DATA.getRandom(DATA.codename[obj.config.gender]);
		RESULT.description = DATA.getRandom(DATA.descritpion['from'])+" "+DATA.getRandom(DATA.descritpion['who'])+" "+DATA.getRandom(DATA.descritpion['for'])+".";
		RESULT.money = DATA.getMoney();

		var html = Mustache.to_html(RESULT_tpl, RESULT);
		$('#result').removeClass('is-inactive').find('.result-wrap').html(html);
		$('#result').find('.btn-rand').on('click', function(e){
			e.preventDefault();
			obj.getResult();
			if(!isToasty){
				lowLag.play("toasty.wav");
				japanese.addClass('is-active');
				isToasty = true;
				setTimeout(function(){
					japanese.removeClass('is-active');
					isToasty = false;
				}, 600);			
			}
		});
	};

	obj.init = function(config){
		obj.config = $.extend( {}, obj.config, config );
		obj.getResult();
	};
	return obj;
}());