import {
    Router, Response,
  } from 'express';
import 'express-async-errors';

import { UserController } from '../../../modules/User/infra/http/Controllers/UserController';

const routes = Router();

routes.post('/create', UserController.execute);

export default routes;