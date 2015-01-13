var memo = {
	list: [],
	add: function(item) {
		if (!_.isString(item)) {
			console.log("Error, not a string");
				return;
		}
		if (_.contains(memo.list, item)) {
			console.log("Error, already there");
			return;
		}
			// add add item to the todo list array
		memo.list.push(item);
	},
	show: function() {
		if (memo.list.length === 0) {  // if there are no items
			console.log("There are no items")
		}
		else {
			for(var i = 0; i < memo.list.length; i++) {
				console.log(i, memo.list[i]);
				}
		}
	},
	remove: function(item) {
		if (_.isNumber(item)) {
			if (item < 0 || item >= memo.list.length) {
				console.log("Nothing to remove")
			}
			else {
				//remove the item at the given index
				memo.list.splice(item, 1)
			}
		}
		else if (_.isString(item)) {
				if (_.contains(memo.list, item)) { //	if item isn't in the list
					console.log("Item not in list")
				} 
			else {
				// remove the item from the list that matches
				memo.list = _.without(memo.list, item)
				}
			}
		else {
			console.log("Did not enter valid number or string")
			}
		
			
		}
	}

	
