// is connected trhgouh the myApp and the shoppinglistitems
angular.module('myApp')

// this is sthe connection and grabs the info from the html file. grab it and use the data attached to the view
// label as homecontroller then add dependencies or diff things we could add to controller 
// we havent defined shoppinglistitems, so put in an array to grab it and access from diff files
// put function to pass in stuff to build out lgica and attach items in getlist/inservers
// [] is we inject code inside control, aka dependency injection
// the things in array are attached to controller
// first slot is always name of controller
// since the shoppinglistitems ahs a connection to getlist,
.controller('HomeController',['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	// can now just say home instead of hte $scope
	// same 2 lines from shoppigncontroller because want to do same thing
	var home = $scope;
	// we will list some stuff in the srvice part, 
	home.items = ShoppingListItems.getList();
}])