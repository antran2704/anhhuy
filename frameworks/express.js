//import morgan from 'morgan';
//import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';

export default function expressConfig(app, express) {
    // security middleware
    //app.use(helmet());
    //app.use(compression());
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Set Templating Engine
    app.use(expressLayouts)
    app.set('layout', './layouts/layout');
    app.set('view engine', 'ejs');

    // Static Files
    app.set('views', path.join(__dirname, '../application/views'));
    app.use(express.static(__dirname + '../application/public'));
    app.use('/css', express.static(__dirname + '../application/public/css'));

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(
        bodyParser.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000
        })
    );

    app.use((req, res, next) => {
        // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', 'http://some-accepted-origin');
        // Request methods you wish to allow
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        );
        // Request headers you wish to allow
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-type, Authorization, Cache-control, Pragma'
        );
        // Pass to next layer of middleware
        next();
    });
}
