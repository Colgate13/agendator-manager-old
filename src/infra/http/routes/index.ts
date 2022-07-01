import {
    Router, Response,
  } from 'express';
import 'express-async-errors';

import User from './User.routes';

export const routesCreator = Router();

const routes = Router();

routes.use('/user', User);

routes.use('/', (response: Response) => {
response.send({
    message: 'Welcome',
    status: 'ONLINE',
    version: '1.0.0',
    documentation: '/docs',
});
});

export default routes;