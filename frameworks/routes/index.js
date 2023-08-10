//import controller
import homeController from './home.js';

//import api
import userApiRouter from './userApi.js';

export default function routes(app, express) {
    //controller
    app.use('/', homeController(express));

    //api
    app.use('/api/user', userApiRouter(express));
}
