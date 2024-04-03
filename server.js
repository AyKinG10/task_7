// app.js
const { registerUser, authenticateUser } = require('./modules/authModule');
const { sendEmail } = require('./modules/emailModule');

// Пример использования
registerUser('ayan.serikkan@narxoz.kz', 'Ayan2004')
    .then(() => {
        sendEmail('ayan.serikkan@narxoz.kz', 'Registration Successful', 'Welcome to our platform!');
    })
    .catch(err => console.error(err));
