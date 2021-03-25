// Composite function
function rokket(num1, num2, num3){
	return num1*num2*num3;
}

console.log(rokket(3, 5, 2));
console.log(rokket(4, 2, 2));
console.log(rokket(8, 2, 1));


// Longest string
function rokket(list){
	res = list.reduce(
			function(longest, currentWord){
				return longest.length > currentWord.length ? longest : currentWord;
			}
		);
	return res;
}

console.log(rokket(['best', 'company', 'ever']));


// String repetition
function rokket(A, N){
	return A.repeat(N);
}

console.log(rokket('node', 5));
console.log(rokket('abc', 2));


// Only last names
function rokket(contacts){
	return contacts.map(contact => contact.lastName);
}

const contacts = [
	{ firstName: 'Juanito', lastName: 'Rokket' },
	{ firstName: 'James', lastName: 'Bond' },
	{ firstName: 'Harry', lastName: 'Potter' }
]
console.log(rokket(contacts))



// Unique numbers
function rokket(list1, list2){
	return [...new Set([...arr1, ...arr2])];
}

let arr1 = [1, 2, 5];
let arr2 = [2, 1, 6];
console.log(rokket(arr1, arr2));