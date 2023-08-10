import impUserRepository from "../../repositories/implement/userRepository.js";
import itfUserRepository from "../../repositories/interface/iUserRepository.js";
import impAuthService from "../../services/implement/authService.js";
import itfAuthService from "../../services/interface/iAuthService.js";

export default function login(username, password) {
    if (!username || !password) {
        const error = new Error('Username and password fields cannot be empty');
        error.statusCode = 401;
        throw error;
    }

    const userRepository = itfUserRepository(impUserRepository());
    const authService = itfAuthService(impAuthService());

    return userRepository.findByUserName(username).then((user) => {
        if (!user.length) {
            const error = new Error('Username invalid');
            error.statusCode = 401;
            throw error;
        }

        const isMatch = authService.compare(password, user[0].password);
        if (!isMatch) {
            const error = new Error('Invalid username or password');
            error.statusCode = 401;
            throw error;
        }
        const payload = {
            user: {
                id: user[0].id
            }
        };

        return authService.generateToken(payload);
    });
}
