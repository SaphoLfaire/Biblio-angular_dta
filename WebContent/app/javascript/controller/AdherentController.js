/**
 * 
 */

app.controller('AdherentController', function($scope, CreaService, $routeParams, $location){
	$scope.adherent = undefined;
	$scope.data = undefined
	$scope.randomPageNotFound = CreaService.getRandomIntInclusive (95, 105);
	$scope.randomTel = CreaService.getRandomIntInclusive (1000000000, 9999999999);
	$scope.user = {'cotisation':{'debut': Date.now(), 'fin': Date.now()+1, 'montant':20}};
	

	
	CreaService.detail($routeParams.id)
		.then(function (data){
			console.log('details', data);
			$scope.adherent = data;
	});
 		
	
	
	
	$scope.search = function (name, firstime){
		CreaService.chercher(name, firstime)
		.then(function(data){
			$scope.data = data;
			if (data[0] != undefined){
				$location.path('/DetailsAdherent/'+data[0].id);
			}
			else {
				$location.path('/AdherentNotFound');
			}
			
			
		});
	};
	
	$scope.relancerRandom = function(){
		$scope.randomTel = CreaService.getRandomIntInclusive (1000000000, 9999999999);
	};
	
	
	$scope.runCreation = function(data){
		CreaService.creation(data)
		.then(function(response){
			$scope.search(data.nom, data.prenom);
		}, function (response){
			$scope.erreurInterne;
		});
	};
	
	$scope.erreurInterne = function(){
		$location.path('/Error');
	}
	
	$scope.modif = function(){
		console.log('adherent',$scope.adherent);
		$scope.edit = true;
		
		
	}
	
	
	
});