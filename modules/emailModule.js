// modules/emailModule.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ayanserikkan2004@gmail.com',
        pass: 'zoyg rmnw zqjs jfqg' // Замените на сгенерированный пароль для приложений
    }
});


function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'ayanserikkan2004@gmail.com',
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
    });
}

module.exports = { sendEmail };
