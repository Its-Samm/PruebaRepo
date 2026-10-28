// producto en base 
 
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    activo: boolean;
    fechaingreso: string;
    categoriaid: number;
    categoria_nombre: string;
}