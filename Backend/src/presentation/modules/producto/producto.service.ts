import { pool } from "../../../config/database";
import { Producto } from "../../../domain/interfaces/producto.interface";

export class ProductoService {

  // Lista los productos junto con el nombre de su categoría
  public async getAllProductos(): Promise<Producto[]> {
    const sql = `SELECT p.id, p.nombre, p.precio::float AS precio, p.stock, p.activo,
        p.fecha_ingreso AS "fechaIngreso",
        p.categoria_id AS "categoriaId", c.nombre AS "categoriaNombre"
      FROM productos p
      JOIN categorias c ON c.id = p.categoria_id
      ORDER BY p.id;`;
    const result = await pool.query(sql);
    return result.rows;
  }

}