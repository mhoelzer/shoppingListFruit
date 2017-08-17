angular.module('myApp')

// factory holds some data for us
// the function is a callback
.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
		// should see an array
		return items;
	}
	// function removeAll(){
	// 	return items = [];
	// }
	return {
		// objects have keys, which is called get list, but the second one is refering to the fcntion above
		// getList 1 calls the function of getList 2 aboves
		getList: getList,
		// removeAll: removeAll
	}
})