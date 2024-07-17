/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express';

import UserController, { type ISetUserBody } from './UserController';

const UserRouter = Router();
// GET REQUESTS
UserRouter.get('/currentuser', async (req, res) => {
  const userId = parseInt(req.query.userId as string);
  const controller = new UserController();
  return controller.getUserInfo(req, req.body as IGetAllUserBody);
});
/**
 * POST
 */
StatisticsRouter.post('/deviceinfo', req => {
  const controller = new StatisticsController();
  return controller.setDeviceInfo(req, req.body as ISetDeviceInfoBody);
});

export default UserRouter;
