import homeController from '../../application/controllers/homeController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

export default function homeRouter(express) {

    const router = express.Router();
    const controller = homeController();

    // GET enpdpoints
    router.route('/').get(controller.index);

    // POST enpdpoints
    // router.route('/').post(api.loginUser);

    return router;
}
