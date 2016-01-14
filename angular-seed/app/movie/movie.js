'use strict';

angular.module('movieDB')
	.controller('movieCtrl', function ($scope, movieAPIservice, $filter, $routeParams) {
		$scope.movieId = $routeParams.id;

		movieAPIservice.getMovies().then(function(response) {		
			$scope.movie = $filter('filter')(response.data, {id: parseInt($scope.movieId)}, true)[0];
		});
	});