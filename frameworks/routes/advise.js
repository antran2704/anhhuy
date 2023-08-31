import adviseController from "../../application/controllers/adviseController.js";

export default function adviseRouter(express) {

    const router = express.Router();
    const controller = adviseController();
    // GET enpdpoints
    router.route('/').get(controller.index);

    return router;
}
