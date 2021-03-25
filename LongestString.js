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