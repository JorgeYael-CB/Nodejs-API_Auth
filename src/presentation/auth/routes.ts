import { Router } from "express";
import { AuthController } from "./controller";



export class AuthRoutes {

  static get routes():Router {
    const routes = Router();
    const controller = new AuthController();


    routes.post('/login-user', controller.login);



    return routes;
  }

}