/**
 * Service principal
 */

app.service('CreaService', function($http){
	
	
	this.chercher = function (nom, prenom){
		var p1 = $http.get("http://192.168.1.15:8090/resource/adherent.recherche" , {params : {
			nom:nom, 
			prenom:prenom
		}});
		var p2 = p1.then(function(response){
			return response.data;
		});
		return p2;
		   
	};
	   
	this.detail = function (id){
		var p1 = $http.get("http://192.168.1.15:8090/resource/adherent.accession" , {params : {
			id : id
		}});
	   var p2 = p1.then(function(response){
		   return response.data;
	   }); //ICI IL FAUT CATCHER UNE ERREUR
	   return p2;
	   
    };
   
    this.getRandomIntInclusive = function (min, max) {
	   min = Math.ceil(min);
	   max = Math.floor(max);
	   return Math.floor(Math.random() * (max - min +1)) + min;
	};
	
	 
	 
	this.creation = function(data){
		var p1 = $http.post("http://192.168.1.15:8090/resource/adherent.creation", data);
		var p2 = p1.then(function(response){
			console.log(response);
			return response;
		},function(response){
			console.warn(response);
		});
		return p2;
	};
})