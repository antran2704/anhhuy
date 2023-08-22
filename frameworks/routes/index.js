//import controller
import contactRouter from './contact.js';
import homeRouter from './home.js';

//import api
import userApiRouter from './userApi.js';

export default function routes(app, express) {
    //controller
    app.use('/', homeRouter(express));
    app.use('/contact', contactRouter(express));

    //api
    app.use('/api/user', userApiRouter(express));
}
