import authServiceImplement from '../../infrastructures/services/implement/authService.js';
import authServiceInterface from '../../infrastructures/services/interface/iAuthService.js';

export default function authMiddleware(req, res, next) {
    const token = req.header('Authorization');
    const authService = authServiceInterface(authServiceImplement());

    if (!token) {
        throw new Error('Access token notfound');
    }

    if (token.split(' ')[0] !== 'Bearer') {
        throw new Error('Invalid access token format');
    }

    try {
        const decoded = authService.verify(token.split(' ')[1]);
        req.user = decoded.user;
        next();
    } catch (err) {
        throw new Error('Token is not valid');
    }
}
