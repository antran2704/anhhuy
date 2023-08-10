export default function serverConfig(app) {
    function start() {

        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            console.log("Server up and running on PORT :", port);
        });
    }

    return { start };
}
