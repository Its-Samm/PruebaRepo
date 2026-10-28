import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { CatalogServise } from "./catalog.service";




export class CatalogController {
    private readonly catalogservice = new CatalogServise();

    getCategories = (req: Request, res: Response): void => {
        this.catalogservice.getCategories()
        .then((categories) => res.status(200) .json(categories))
        .catch((error) => HandleError.error(error, res));
  };

  getProducts = (req: Request, res: Response): void => {
    this.catalogservice.getProducts()
    .then((products) => res.status(200).json(products))
    .catch((error) => HandleError.error(error, res));
    }
}