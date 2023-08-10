import userApi from '../../application/apis/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

export default function userRouter(express) {
    const router = express.Router();

    const api = userApi();

    // GET enpdpoints
    router.route('/test').get(authMiddleware, api.test);

    // POST enpdpoints
    router.route('/').post(api.loginUser);

    return router;
}
