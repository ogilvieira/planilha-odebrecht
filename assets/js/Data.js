var DATA = {};
DATA.debug = false;

// Faceboop APP ID
// if(document.location.origin == "http://ogilvieira.github.io"){
	DATA.fbAppId = '962255157185368';
// } else {
	// DATA.fbAppId = '1705492553024172';
// }

DATA.codename = {
	'male' : [],
	'female' : [],
};

DATA.descritpion 			= {};
DATA.descritpion['from'] 	= [];
DATA.descritpion['who'] 	= [];
DATA.descritpion['for'] 	= [];
DATA.getMoney = function(){
	var r = Math.floor(Math.random() * (10e6 - 0 + 1) + 0);
	return accounting.formatMoney(r,"R$ ", 2,".", ",");
};
DATA.getRandom = function(arr){
	var i = Math.floor(Math.random()*arr.length);
	return arr[i];
};

//COCDENAME MALE
DATA.codename.male.push("da Federal");
DATA.codename.male.push("Colorido");
DATA.codename.male.push("Oculto");
DATA.codename.male.push("do Cachorrinho");
DATA.codename.male.push("Chato");
DATA.codename.male.push("Tranquilo");
DATA.codename.male.push("Diferentão");
DATA.codename.male.push("do Mangue");
DATA.codename.male.push("da Farinha");
DATA.codename.male.push("do Nacional");
DATA.codename.male.push("do Estadual");
DATA.codename.male.push("do Helicóptero");
DATA.codename.male.push("da Força");
DATA.codename.male.push("da Universal");
DATA.codename.male.push("da Farsa");
DATA.codename.male.push("da Persia");
DATA.codename.male.push("do Sítio");
DATA.codename.male.push("do Torresmo");
DATA.codename.male.push("Acarajé");
DATA.codename.male.push("Batoré");
DATA.codename.male.push("Campeão");
DATA.codename.male.push("da CUT");
DATA.codename.male.push("Bossa nova");
DATA.codename.male.push("Pastor");
DATA.codename.male.push("da Terrinha");
DATA.codename.male.push("Jamanta");
DATA.codename.male.push("Candidato");
DATA.codename.male.push("Atleta");
DATA.codename.male.push("Roberval");
DATA.codename.male.push("Calabresa");
DATA.codename.male.push("do Viagra");

//COCDENAME FEMALE
DATA.codename.male.push("da Federal");
DATA.codename.male.push("Colorida");
DATA.codename.male.push("Oculta");
DATA.codename.male.push("do Cachorrinho");
DATA.codename.male.push("Chata");
DATA.codename.male.push("Tranquila");
DATA.codename.male.push("Diferentona");
DATA.codename.male.push("do Mangue");
DATA.codename.male.push("da Farinha");
DATA.codename.male.push("do Nacional");
DATA.codename.male.push("do Estadual");
DATA.codename.male.push("do Helicóptero");
DATA.codename.male.push("da Força");
DATA.codename.male.push("da Universal");
DATA.codename.male.push("da Farsa");
DATA.codename.male.push("da Terrinha");
DATA.codename.male.push("do Sítio");
DATA.codename.male.push("do Torresmo");
DATA.codename.male.push("Acarajé");
DATA.codename.male.push("Canhão");
DATA.codename.male.push("Campeã");
DATA.codename.male.push("da CUT");
DATA.codename.male.push("Candidata");
DATA.codename.male.push("Atleta");
DATA.codename.male.push("Calabresa");
DATA.codename.male.push("da TPM");

//FROM
DATA.descritpion['from'].push("Recebia pagamentos mensais");
DATA.descritpion['from'].push("Recebia propina");
DATA.descritpion['from'].push("Recebia quantias em dolar");
DATA.descritpion['from'].push("Recebia Contratos super faturados");

//WHO
DATA.descritpion['who'].push("dos petralhas");
DATA.descritpion['who'].push("dos tucanos");
DATA.descritpion['who'].push("do MST");
DATA.descritpion['who'].push("dos coxinhas");
DATA.descritpion['who'].push("da Dilma");
DATA.descritpion['who'].push("do Aécio");
DATA.descritpion['who'].push("da Odebretch");
DATA.descritpion['who'].push("do Bolsonaro");
DATA.descritpion['who'].push("da militância petista");
DATA.descritpion['who'].push("da empresa de fachada de Alberto Youssef");
DATA.descritpion['who'].push("da CUT");
DATA.descritpion['who'].push("da Globo");

//FOR
DATA.descritpion['for'].push("para levar dinheiro na cuéca");
DATA.descritpion['for'].push("para servir de laranja");
DATA.descritpion['for'].push("para prometer apoio politico");
DATA.descritpion['for'].push("para obstruiu as investigações da Lava Jato");
DATA.descritpion['for'].push("para barrar uma CPI sobre a Petrobras");
DATA.descritpion['for'].push("para reforar triplex na praia");
DATA.descritpion['for'].push("para delatar oposição");
DATA.descritpion['for'].push("para comprar helicóptero");
DATA.descritpion['for'].push("para fazer caixa dois");
DATA.descritpion['for'].push("em benefício própio e para repasse ao PT");
DATA.descritpion['for'].push("em troca de contratos com a Caixa Econômica Federal");
DATA.descritpion['for'].push("liderar manifestação pró Aécio");
DATA.descritpion['for'].push("liderar manifestação pró Dilma");
