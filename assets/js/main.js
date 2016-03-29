;(function($){

var getPhoto = function(userid){
	return "http://graph.facebook.com/"+userid+"/picture?type=large";
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var getFullName = function(name, gender){
var lastName = ['male', 'female'];
	lastName['male'] = ['Colorido','Oculto','do Cachorrinho','Chato','Tranquilo','Diferentão','do Mangue','da Farinha','de SP','do Nacional','do Estadual','do Helicóptero','da Força','da Farsa','da Pérsia','Porcina','da Usabilidade','do Sítio','do Torresmo','de um Terço','Acarajé','Candomblé','Rei Pelé','Batoré','Reeleito','Campeão','do Segundo Turno','Grego','do Viagra','da Federal'];
	lastName['female'] = ['Colorida','Oculta','do Cachorrinho','Chata','Tranquila','Diferentona','do Mangue','da Farinha','de SP','do Nacional','do Estadual','do Helicóptero','da Força','da Farsa','da Pérsia','Porcina','da Usabilidade','do Sítio','do Torresmo','de um Terço','Acarajé','Candomblé','Batoré','Reeleita','Campeã','do Segundo Turno','Grega','TPM','da Federal'];

	return name+" "+lastName[gender][getRandomInt(0, (lastName[gender].length-1))];
};
  window.fbAsyncInit = function() {
    
    FB.init({
      appId      : '1705492553024172',
      xfbml      : true,
      version    : 'v2.5'
    });

	FB.login(function(response) {
		FB.api('/me', { fields: 'first_name,gender,email' }, function(response) {
			console.log(response);
			console.log("Avatar: "+getPhoto(response.id));
			console.log("Primeiro nome: "+response.first_name);
			console.log("Sexo: "+response.gender);
			console.log("E-mail: "+response.email);
			console.log(getFullName(response.first_name, response.gender));
		});

	}, { scope: 'public_profile,email,user_hometown', auth_type: 'rerequest' });
	

  }; 

  var checkLoginState = function(res){
  	console.log(res);
  };


})(jQuery || $);
