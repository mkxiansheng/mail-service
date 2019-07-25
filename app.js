const nodemailer = require('nodemailer')

const configs = require('./configs/config')

console.log(configs)

const mailOptions = {
    from: configs.auth.user,
    to: '****',
    subject: 'test node meil service',
    html: 'hello world!'
}

const transporter = nodemailer.createTransport(configs)
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  // success
  console.log('Message %s sent: %s', info.messageId, info.response);
})