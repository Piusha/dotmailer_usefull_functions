const DotMailerClient= require( "./DotmailerClient");
const  dotmailer = new DotMailerClient();
const DataSet = require('./dataset.json');
const path = require('path');

const csvPath = path.join(__dirname,'contacts.csv');
// var config =
//   	{ 
// 		auth: { 
// 			user: 'apiuser-f7be3246cbba@apiconnector.com', 
// 			pass: 'zaqwsx@123' 
// 		},
//     	baseUrl: 'https://r1-api.dotmailer.com/v2/' 
//     // Any other 'request' options here
//   }
//   , dotmailer = require('dotmailer')(config);
 
// dotmailer('GetAccountInfo',  function (error, res) {
//   console.log(error, res)
// })


/**
 * Post AddressBook
 * resp
 * { id: 669259,
  name: 'sm_address_b1',
  visibility: 'Public',
  contacts: 0 }
 */
/*
const addresses = {
	id:2,
	Name:"sm_address_b222",
	Visibility:'Public',
	Contacts:10

}

dotmailer('PostAddressBooks', addresses, function (error, res) {
	console.log("ERROR-->",error);
	console.log("RESP-->" ,res);
})
*/
/**
 * Add contacts to address book
 */

const methods = [
	'GetAccountInfo', // Get Accont Info
	'PostAddressBooks', //Create New Address Book,
	'PostAddressBookContacts',
	'GetAddressBookById',
	'DeleteAddressBookContacts',
	'DeleteAddressBook',
	'PostContactsImport',
	'PostContactsImport'

	
];

/*const */


try{

	
	dotmailer.setID(684801);
	dotmailer.setPayload(csvPath);

	dotmailer.run(methods[6],function(error,resp){
		console.log("ERRROR-->",error);
		console.log("RESP-->" ,resp);
	});

	

}catch(error){
	console.log(error)
}