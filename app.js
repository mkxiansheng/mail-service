const nodemailer = require('nodemailer')
const fs = require('fs')

const configs = require('./configs/config')

const logIn = fs.readFileSync('./template/login.html', 'utf8')

// console.log(logIn)

console.log(configs)

const mailOptions = {
    from: configs.auth.user,
    to: '****',
    subject: '****',
    html: '****'
}

const transporter = nodemailer.createTransport(configs)
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  // success
  console.log('Message %s sent: %s', info.messageId, info.response);
})