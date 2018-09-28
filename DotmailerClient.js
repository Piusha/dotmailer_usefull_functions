const dotmailer = require('dotmailer');

function DotMailerClient(){
	this.confg = 	{ 
		auth: { 
			user: 'apiuser-f7be3246cbba@apiconnector.com', 
			pass: 'zaqwsx@123' 
		},
		baseUrl: 'https://r1-api.dotmailer.com/v2' 
	}
}

DotMailerClient.prototype.setEndPoint = function( endPoint = null ){

	this.confg.baseUrl = (endPoint != null) ? this.confg.baseUrl + endPoint:'';
	return this;

}


DotMailerClient.prototype.setPayload = function( payload = null ){

	this.payload = payload
	return this;

}


DotMailerClient.prototype.setID = function( id =null){

	this.id = id;
	return this;
}

DotMailerClient.prototype.run = function(method,cb){
	try{

		console.log("BASE_URL-->",this.confg.baseUrl);
		console.log('METHOD-->',method);
		console.log('PAYLOAD-->',this.payload);

		
		const _dotmailer = dotmailer(this.confg)

		
		if(typeof this.id != 'undefined' && typeof this.payload != 'undefined'){
			console.log('ID-->',this.id);
			return _dotmailer(method, this.id, this.payload, cb)
			
			
		}else if(typeof this.payload != 'undefined'){
			
			return _dotmailer(method, this.payload, cb);
		}else{

			return _dotmailer(method,cb)
		}

		  

	}catch(error){
		console.log(error);
		throw error;
	}
}
module.exports = DotMailerClient;