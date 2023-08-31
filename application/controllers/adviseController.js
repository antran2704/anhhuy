export default function adviseController() {
    const index = (req, res, next) => {
        res.render('tu-van-maketing', { title: 'Home Page' });
    }

    return {
        index
    };
}