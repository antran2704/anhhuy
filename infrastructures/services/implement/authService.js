import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../../../config/config.js';

export default function authService() {
    const encryptPassword = (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const compare = (password, hashedPassword) =>
        bcrypt.compareSync(password, hashedPassword);

    const verify = (token) => jwt.verify(token, config.jwtSecret);

    const generateToken = (payload) => jwt.sign(payload,
        config.jwtSecret, { expiresIn: config.authExpiresIn });

    return {
        encryptPassword,
        compare,
        verify,
        generateToken
    };
}
