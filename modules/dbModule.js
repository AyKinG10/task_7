// modules/dbModule.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task7', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

function registerUser(username, password) {
    const user = new User({ username, password });
    return user.save();
}

function authenticateUser(username, password) {
    return User.findOne({ username }).then(user => {
        if (!user) return Promise.reject('User not found!');
        return bcrypt.compare(password, user.password);
    }).then(result => {
        if (result) return 'Authentication successful!';
        else return Promise.reject('Authentication failed!');
    });
}

module.exports = { registerUser, authenticateUser };
