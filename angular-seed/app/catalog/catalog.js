'use strict';

angular.module('movieDB')
	.controller('catalogCtrl', function ($scope, movieAPIservice) {

		$scope.currentPage = 1;
		$scope.pageSize = 12;
		$scope.pageTitle = "Most Watched this Week";

		movieAPIservice.getMovies().then(function(response) {
			$scope.movieList = response.data;
		});

		movieAPIservice.getGenres().then(function(response) {
			$scope.genreList = response.data;
		});
	});