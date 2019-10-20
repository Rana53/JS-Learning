'use strict';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port:465,
  secure: true,
  auth: {
    user: 'ranajahid.cseru@gmail.com',
    pass: 'pass here'
  }
});

var mailOptions = {
  from: 'ranajahid.cseru@gmail.com',
  to: 'ajrafi2722@gmail.com mchowdhury244@gmail.com',
  subject: 'Sending Email using Node.js from Rana Bhai',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("Fuck " + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

// this article help us : https://stackoverflow.com/questions/51217785/i-get-a-error-error-invalid-login-535-5-7-8-username-and-password-not-accep
