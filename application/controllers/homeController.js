//import login from '../../infrastructures/usecases/user/login.js';

export default function userController() {

    const index = (req, res, next) => {
        res.render('home/index', { title: 'Home Page' });
    }

    return {
        index
    };
}
