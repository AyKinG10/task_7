// modules/authModule.js
const fs = require('fs');
const bcrypt = require('bcrypt');

const usersFilePath = './users.json';

function registerUser(username, password) {
    return new Promise((resolve, reject) => {
        fs.readFile(usersFilePath, 'utf8', (err, data) => {
            if (err) reject(err);
            let users = JSON.parse(data || '[]'); // Проверяем, что data не пусто, иначе используем пустой массив
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) reject(err);
                users.push({ username, password: hash });
                fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
                    if (err) reject(err);
                    resolve('User registered successfully!');
                });
            });
        });
    });
}


function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        fs.readFile(usersFilePath, 'utf8', (err, data) => {
            if (err) reject(err);
            let users = JSON.parse(data);
            const user = users.find(user => user.username === username);
            if (!user) reject('User not found!');
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) reject(err);
                if (result) {
                    resolve('Authentication successful!');
                } else {
                    reject('Authentication failed!');
                }
            });
        });
    });
}

module.exports = { registerUser, authenticateUser };
