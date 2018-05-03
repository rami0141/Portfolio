const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");

// sending emails with SMTP, configuration using SMTP settings
	var smtpTransport = nodemailer.createTransport( {
		host: 'smtp.gmail.com', //hostname
		secureConnection: true,
		port: 465, // port for secure SMTP
			auth: {
	 			user: process.env.email,
				pass: process.env.password
			},

	});

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 

    // setup email data with unicode symbols
    let mailOptions = {
    	from: this.email,
     	to: "czhang0141@gmail.com",
    	subject: 'New message from portfolio contact form ',
    	text: name, emal, message
    }
// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
