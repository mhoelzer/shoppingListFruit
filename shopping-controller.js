// this si that easy to attach things to other files in angular
angular.module('myApp')

// $scope refers to pulling data and info from view
.controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	// get scope from view 
	var shoplist = $scope;
	// manipluaet and send to service/getList()
	// create an object. hey shoppgnglistitems, send your stuff to shoplist. the push puts list here
	shoplist.items = ShoppingListItems.getList();
	// we are buiilding an obejxt here
	// this addItem was used in shoppinglist.html. used on the frontend will be now in terms of an object tos tore in database
	shoplist.addItem = function(newItem){
		// takes in an object and comes here
		// goes to service of shoplist.items, and we want to push an object with name, uqntity, and priority
		shoplist.items.push({
			// hey grab me this scope and grab me this newitem.name
			// the ng-models from shoppinglist.html were being attached to the $scope so now you can build our obect
			fruit: shoplist.newItem.fruit,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
		})
		// to see what type it's printing. then the parseInt before shoplist.newitem.qty if want
		// console.log(typeof(parseInt(shoplist.newItem.qty))
	}
	shoplist.removeItem = function(item){
		// store things to remoe item var to use splice
		// returns the fist index at which a given element can be found in the array or -1 if its not present
		// shoplist.item is from the array above. the indexof gives the place of where the item is
		// returns first element in a given array, which is item here
		var removedItem = shoplist.items.indexOf(item);
		// splice needs a starting and ending point. delete a specific item from removeItem
		// the splice() method chnages the contents of an array by reoving exiisting element s and/or adding new eleements
		// good to read about. can add/remove elements. witht he 1, it will remove 1. if 2, it will remove from 1st and 2nd
		// can remove and replace with something else. do rremovedItem,1, g
		shoplist.items.splice(removedItem, 1)
	};
	// giving an empyt array
	shoplist.removeAll = function(){
		// how to empty an array
		shoplist.items.length = 0;
		// shoplist.items = [];
		// shoplist.items.splice(0);
		// orrr, if do this, make the shopping-service.js not a comment
		// this uses service to do all logic and use controller to pass data around
		// shoplist.items = [];
		// ShoppingListItems.removeAll();
	}
}])
// home controller and shoppng controller both have a scope and they both get the original array by using service, so if want to change something about both, can cahnge in one
// shopping service!!!
// do stuff inside a service. the controller just switches stuff between service ad view