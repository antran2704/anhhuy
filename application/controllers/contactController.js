
export default function contactController() {

    const index = (req, res, next) => {
        res.render('contact/index', { title: 'Liên hệ' });
    }

    return {
        index
    };
}
