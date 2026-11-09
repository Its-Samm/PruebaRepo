import { pool } from "../../../config/database";
import { Category } from "../../../domain/interfaces/catalog.interface";
import { Producto } from "../../../domain/interfaces/producto.interface";


export class CatalogServise {
    public async getCategories (): Promise<Category[]> {
        const result = await pool.query<Category>(
            "SELECT id, nombre FROM categorias ORDER BY nombre;"
        );
        return result.rows;
    }

    public async getProducts(): Promise<Producto[]> {
    const result = await pool.query<Producto>(
      `SELECT p.id, p.nombre, p.precio::float AS precio, p.stock, p.activo, p.fecha_ingreso,
        p.categoria_id,
        c.nombre AS categoria_nombre
      FROM productos p
      INNER JOIN categorias c ON c.id = p.categoria_id
      ORDER BY p.fecha_ingreso DESC, p.nombre;`
    );
    return result.rows;
  }
}