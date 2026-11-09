export interface Category {
    id: number;
    nombre: string;
}

export interface Product {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    activo: boolean;
    fecha_ingreso: string;
    categoria_id: number;
    categoria_nombre: string;
}