var FbHelper = (function(){
	var obj = {};

	obj.getPhoto = function(userid){
		return "http://graph.facebook.com/"+userid+"/picture?type=large";
	};

	return obj;
});