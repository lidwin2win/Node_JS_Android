const express = require("express");

const bodypr  = require("body-parser");

const app = express();

const port = 8080;

app.use(bodypr.urlencoded({extended:true}));


require('./app/routes')(app);

app.listen(port,()=>{


	console.log("We are live on port "+port);


});




