//import login from '../../infrastructures/usecases/user/login.js';

export default function serviceController() {

    const index = (req, res, next) => {
        res.render('index', { title: 'Dịch vụ' });
    }

    return {
        index
    };
}
