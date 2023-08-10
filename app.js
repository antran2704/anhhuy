import express from 'express';
import serverConfig from './frameworks/server.js';
import expressConfig from './frameworks/express.js';
import routes from './frameworks/routes/index.js';

const app = express();

expressConfig(app, express);
serverConfig(app).start();
routes(app, express);

export default app;