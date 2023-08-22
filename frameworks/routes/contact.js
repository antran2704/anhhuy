import contactController from '../../application/controllers/contactController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

export default function contactRouter(express) {
    const router = express.Router();

    const controller = contactController();

    // GET enpdpoints
    router.route('/').get(controller.index);

    return router;
}
