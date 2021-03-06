;(function($){

  window.fbAsyncInit = function() {
    FB.init({
      appId      : DATA.fbAppId,
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  $('.btn-login').on('click', function(e){
  	e.preventDefault();
  	//get fb login
	FB.login(function(res) {
		FB.api('/me', { fields: 'first_name,gender,hometown' }, function(res) {
			if(res.error){ 
				$('#result').removeClass('is-active').find('.result-wrap').html('');
				$('#intro').removeClass('is-inactive');
				return; 
			};
			Generator.init({
				first_name : res.first_name,
				gender : res.gender,
				uid : res.id
			});
		});
	},{ scope: 'public_profile', auth_type: 'rerequest' });
  });

})(jQuery || $);
