import { Router } from "express";
import { ProductoController } from "./producto.controller";

export class ProductoRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new ProductoController();

    router.get("/", controller.getAllProductos);

    return router;
  }
}