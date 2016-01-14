'use strict';

angular.module('movieDB', [
	'ngRoute', 
	'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'catalog/catalog.html', 
				controller: 'catalogCtrl',
				controllerAs: 'main'
			})
			.when('/movie/:id', {
				templateUrl: 'movie/movie.html',
				controller: 'movieCtrl',
				controllerAs: 'movie'
			})
			.when('/genre/:genreName', {
				templateUrl: 'catalog/catalog.html',
				controller: 'genreCtrl',
				controllerAs: 'genre'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

