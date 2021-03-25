// Unique numbers
function rokket(list1, list2){
	return [...new Set([...arr1, ...arr2])];
}

let arr1 = [1, 2, 5];
let arr2 = [2, 1, 6];
console.log(rokket(arr1, arr2));