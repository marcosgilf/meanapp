angular.module('meanapp', ['ngRoute', 'ngSanitize', 'URL', 'angularMoment']).config(
	['$routeProvider', 'paths', function($routeProvider, paths) {
	
		$routeProvider.when(paths.url.home, {
			templateUrl: 'views/Login.html'
		}).when(paths.url.todo, {
			templateUrl: 'views/Todo.html'
		}).otherwise({
            templateUrl: 'views/404.html'
        });


	}]
);