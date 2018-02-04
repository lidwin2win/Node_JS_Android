
var nodemailer = require('nodemailer');


module.exports = function(app){

	app.get("/send_email",(req,res)=>{


		var tr = nodemailer.createTransport({service:"gmail",auth:{user:"lidwin2win@gmail.com",pass:".1Jesus."}});		


		var mail ={from:"lidwin2win@gmail.com",to:"lidwin2win@gmail.com",subject:"summa",text:"jaj"};

		
		tr.sendMail(mail,function(err,info){
		
			if(error)console.log("Error");
			
			else{ console.log("email sent"); res.end("Succes in email sending");}

		});


	});


};
