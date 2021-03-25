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