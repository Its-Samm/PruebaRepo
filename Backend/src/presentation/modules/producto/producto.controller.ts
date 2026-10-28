import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { ProductoService } from "./producto.service";

export class ProductoController {

  private readonly productoService = new ProductoService();

  getAllProductos = (req: Request, res: Response): void => {
    this.productoService.getAllProductos()
    .then((productos) => res.status(200).json(productos))
    .catch((error) => HandleError.error(error, res));
  };

}