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
const PORT = 3000;

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
        from: `${req.body.name}`,
        to: process.env.email,
        subject: 'New message from portfolio contact form ',
        text: `From: ${req.body.name} 
        Email: ${req.body.email} 
        Phone: ${req.body.number} 
        Message: ${req.body.message}`
    }
// send mail with defined transport object
    smtpTrans.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ', info.messageId);
        res.sendFile(path.join(__dirname, "public/home.html"))
    });
 })
    
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});