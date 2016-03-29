;(function($){


// var getRandomInt = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// var getFullName = function(name, gender){
// var lastName = ['male', 'female'];
// 	lastName['male'] = ['Colorido','Oculto','do Cachorrinho','Chato','Tranquilo','Diferentão','do Mangue','da Farinha','de SP','do Nacional','do Estadual','do Helicóptero','da Força','da Farsa','da Pérsia','Porcina','da Usabilidade','do Sítio','do Torresmo','de um Terço','Acarajé','Candomblé','Rei Pelé','Batoré','Reeleito','Campeão','do Segundo Turno','Grego','do Viagra','da Federal'];
// 	lastName['female'] = ['Colorida','Oculta','do Cachorrinho','Chata','Tranquila','Diferentona','do Mangue','da Farinha','de SP','do Nacional','do Estadual','do Helicóptero','da Força','da Farsa','da Pérsia','Porcina','da Usabilidade','do Sítio','do Torresmo','de um Terço','Acarajé','Candomblé','Batoré','Reeleita','Campeã','do Segundo Turno','Grega','TPM','da Federal'];

// 	return name+" "+lastName[gender][getRandomInt(0, (lastName[gender].length-1))];
// };
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1705492553024172',
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
