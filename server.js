// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// public folder
app.use(express.static('./public'));
// Routes
// require("./routes/html-routes.js")(app);

app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "public/home.html"));
    });

app.post("/send", (req, res) => {
    console.log(req.body);


// sending emails with SMTP, configuration using SMTP settings
	var smtpTrans = nodemailer.createTransport({
		host: 'smtp.gmail.com', //hostname
		secureConnection: true,
		port: 465, // port for secure SMTP
			auth: {
	 			user: process.env.email,
				pass: process.env.password
			},

	});

    // setup email data with unicode symbols
    let mailOptions = {
    	from: this.email,
     	to: "czhang0141@gmail.com",
    	subject: 'New message from portfolio contact form ',
    	text: "hello"
    }
// send mail with defined transport object
    smtpTrans.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
 })
	
// NODEMAILER
// Sending mail function

// app.post('/send', function(req, res) {
// 	if(req.body.mail == "" || req.body.subject == "") {
// 		res.send("Error: Email & Subject should not be blank!");
// 	}


// 	var mailOptions = {
// 		from: "Node Emailer - <email@gmail.com>", //sender address
// 		to: req.body.email, // list of receivers
// 		subject: req.body.name+" -", //Subject Line
// 		text: "Hello from portfolio",
// 		html: req.body.message
// 	}
// 	smtpTransport.sendMail(mailOptions, function (error, response) {
// 		if (error) {
// 			console.log("Email could not be sent due to an error: " + error);
// 		} else {
// 			console.log("Email has been sent");		
// 		}
// 	});
// });

// this houses the data
// POST route from contact form
// app.post('/contact', function (req, res) {
// let transporter =  nodemailer.createTransport({
// 	service: 'gmail',
// 	secure: true,
// 	port:25, 
// 	auth: {
// 		user: process.env.email,
// 		pass: process.env.password
// 	},
// 	tls: {
// 		rejectUnauthorized: false
// 	}
// });
// })
//body of email
  // mailOpts = {
  //   from: req.body.name + ' &lt;' + req.body.email + '&gt;',
  //   to: process.env.email,
  //   subject: 'New message from portfolio contact form ',
  //   text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  // };

// If error exists
// transporter.sendMail(HelperOptions, (error, info) => {
// 	if(error) {
// 		return console.log(error);
// 	}
// 	console.log("The message was sent");
// 	console.log(info);
// });




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
