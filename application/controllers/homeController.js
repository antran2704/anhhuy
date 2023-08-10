//import login from '../../infrastructures/usecases/user/login.js';

export default function userController() {

    const index = (req, res, next) => {
        res.render('index', { title: 'Home Page' });
    }

    return {
        index
    };
}
