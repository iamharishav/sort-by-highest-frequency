var arr = [5,8,2,5,7,2,7,5,1,8,2,5,3,3,9,6] // Sample Array
var obj = {}; // Empty object 

// Build an object with item frequency
arr.forEach(function(item){
	if (obj[item]){
		obj[item] = obj[item]+1;
	}else{
		obj[item] = 1;
	}
});

// Convert object into array
var superList = [];
Object.keys(obj).forEach(function (key) {
  superList.push({key: key, value: obj[key]});
});
	
// Sort the array based on the value
var myList = superList.sort((function(a,b){
	return b.value.toString().localeCompare(a.value);
}));

// Construct back the array 
var finalArray = [];
myList.forEach(function(item){
	for (var i = 0; i < item.value; i++) {
		finalArray.push(item.key);
	}
});	

console.log(finalArray);
