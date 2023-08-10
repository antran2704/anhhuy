import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 1234,
    ip: process.env.HOST || '0.0.0.0',
    jwtSecret: process.env.JWT_SECRET || '123456',
    authExpiresIn: process.env.AUTH_EXPIRES_IN || 60000,
};
