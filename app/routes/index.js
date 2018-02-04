
var nodemailer = require('nodemailer');


module.exports = function(app){

	app.get("/send_email",(req,res)=>{


		console.log("You called me!");

		var tr = nodemailer.createTransport({service:"gmail",auth:{user:"lidwin2win@gmail.com",pass:".1Jesus."}});		
	

		console.log("Secuirity check!");		


		var mail ={from:"lidwin2win@gmail.com",to:"lidwin2win@gmail.com",subject:"summa",text:"http://example1.com/"};

		
		console.log("content check!");

		tr.sendMail(mail,function(err,info){
		

		console.log("sending maillo");

			if(err){

				console.log("Error");

				res.sendStatus(500);

			}
			
			else{ 

				console.log("email sent successfully "+info.message);

				res.sendStatus(200);


			}

		});


	});





};
