;(function($){

  window.fbAsyncInit = function() {
    FB.init({
      appId      : DATA.fbAppId,
      xfbml      : true,
      version    : 'v2.5'
    });
	FB.getLoginStatus(function(res){
		if(res.status == "connected" && document.URL.indexOf("?code=") !== -1){
		FB.api('/me', { fields: 'first_name,gender,hometown' }, function(res) {
			if(res.error){ 
				$('#result').removeClass('is-active').find('.result-wrap').html('');
				// $('#intro').removeClass('is-inactive');
				return; 
			};
			Generator.init({
				first_name : res.first_name,
				gender : res.gender,
				uid : res.id
			});
		});  		
		};
	});
  };

  $('.btn-login').on('click', function(e){
  	e.preventDefault();
  	window.open("https://www.facebook.com/dialog/oauth?close&client_id="+DATA.fbAppId+"&redirect_uri=http://www.ogilvieira.com.br/planilha-odebrecht/", "_self");
  });

})(jQuery || $);
