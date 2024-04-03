// tests/authModule.test.js
const { registerUser, authenticateUser } = require('../modules/authModule');

describe('User Authentication Module', () => {
    test('Register new user', async () => {
        const result = await registerUser('testuser', 'password');
        expect(result).toBe('User registered successfully!');
    });

    test('Authenticate existing user', async () => {
        const result = await authenticateUser('testuser', 'password');
        expect(result).toBe('Authentication successful!');
    });
});
