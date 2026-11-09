export interface Producto {
    id: number;
  nombre: string;
  precio: number;
  stock: number;
  activo: boolean;
  fechaIngreso: string;
  categoriaId: number;
  categoriaNombre: string;
}
