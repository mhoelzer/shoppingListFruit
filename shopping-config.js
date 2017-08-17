// myApp was seen in index.html. it is how js is configured to html. how pushing data ad directing it is whrer this comes from
// the ngRoute hast o do with the angualr. its located in the language itself. the [] is pointing to a sepcific service.
// anything inside the [] is a service that will be included intour apllication. ngRouse is a service built into angualr
var app = angular.module('myApp',['ngRoute'])
	// this is us pulling info from ngRoute service. the routeProvider method is located inside
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		// when a useer reaches my root page, they will be navigated to the home.html url
			// when hit root of appication, make sure that we use template url to be the views and home
			// building out diff routes for viewer go get somewhere
			.when('/',{
				templateUrl: "views/home.html"
			// if any problems alsway redicrt to home
			}) .otherwise({
				redirectTo: "/home"
			})
			// when get to home...
			// when at home link, conect to the home file
			.when('/home', {
				// template is a fallback
				templateUrl: "views/home.html",
				controller: "HomeController"
			})
			.when('/shopping-list',{
				// name of page and need controller
				// controller only should be used injs
				templateUrl: "views/shopping-list.html",
				controller:"ShoppingListController",
				// thid creates an alias for the controller. i could efer to it as the ebig word or the small. 
				// calling it or the regualr controller will gret it
				controllerAs: "shoplist"
			}) .otherwise({
				redirectTo: "/home"
			})
	}])