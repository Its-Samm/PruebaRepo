export type Tipo = 'concepto' | 'proyecto' | 'actividad';
export type Filtro = 'todos' | Tipo;

export interface Item {
  tipo: Tipo;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
}