import { Router } from 'express';
import { AuthRoutes } from './auth/routes';



export class Routes {

  static get Router():Router{
    const routes = Router();


    routes.use('/auth', AuthRoutes.routes);



    return routes;
  }

}
