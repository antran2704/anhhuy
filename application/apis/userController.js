import login from '../../infrastructures/usecases/user/login.js';

export default function userController() {
    const loginUser = (req, res, next) => {
        const { username, password } = req.body;
        login(username, password)
            .then((token) => res.json(token))
            .catch((err) => next(err));
    };

    const test = (req, res, next) => {
        res.json("Ok");
    }

    return {
        loginUser,
        test
    };
}
