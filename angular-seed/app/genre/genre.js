'use strict';

angular.module('movieDB')
	.controller('genreCtrl', function ($scope, movieAPIservice, $routeParams, $filter) {

		$scope.currentPage = 1;
		$scope.pageSize = 12;
		$scope.genreName = $routeParams.genreName;
		$scope.pageTitle = $scope.genreName + " movies";

		movieAPIservice.getMovies().then(function(response) {
			$scope.movieList = $filter('filter')(response.data, function (movie) {
				return $filter('filter')(movie.genres, {name: $scope.genreName}).length;
			});
		});

		movieAPIservice.getGenres().then(function(response) {
			$scope.genreList = response.data;
		});
	});