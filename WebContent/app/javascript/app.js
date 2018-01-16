/**
 * Module principal
 */

var app = angular.module('app', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/template/IndexTemplate.html',
		})
	
		.when('/CreaAdherent', {
			templateUrl : '/template/CreaAdherentTemplate.html',
			controller : 'AdherentController',
		})
		
		.when('/DetailsAdherent/:id', {
			templateUrl : '/template/DetailsAdherentTemplate.html',
			controller : 'AdherentController',
			
		})
		.when('/ModifAdherent', {
			templateUrl : '/template/ModifAdherentTemplate.html',
			controller : 'AdherentController',
			
		})
		
		.when('/StatsAdherents', {
			templateUrl : '/template/StatsAdherentTemplate.html',
		})
		
		.when('/ChercherAdherent', {
			templateUrl : '/template/ChercherAdherentTemplate.html',
			controller : 'AdherentController',
		})
		
		.when('/AdherentNotFound', {
			templateUrl : '/template/AdherentNotFoundTemplate.html',
			controller : 'AdherentController',
		})
		
		.when('/Error', {
			templateUrl : '/template/ErreurInterneTemplate.html',
		})
		
		
});

//ATTENTION TOUTES LES ERREURS SONT SUPPRIM2ES DE L4AFFICHAGE

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);


