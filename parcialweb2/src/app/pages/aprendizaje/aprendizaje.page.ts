import { Component } from '@angular/core';
import { Filtro, Item, Tipo } from '../../models/aprendizaje';

@Component({
  selector: 'app-aprendizaje-page',
  imports: [],
  templateUrl: './aprendizaje.page.html',
  styleUrl: './aprendizaje.page.scss'
})
export class AprendizajePage {
  filtro: Filtro = 'todos';

  filtros: { valor: Filtro; texto: string }[] = [
    { valor: 'todos', texto: 'Todos' },
    { valor: 'concepto', texto: 'Conceptos' },
    { valor: 'proyecto', texto: 'Proyectos' },
    { valor: 'actividad', texto: 'Actividades' },
  ];

  colores: Record<Tipo, string> = {
    concepto: 'bg-black text-light',
    proyecto: 'bg-info text-dark',
    actividad: 'bg-primary text-light',
  };

  items: Item[] = [
    { tipo: 'concepto', titulo: 'Componentes standalone', descripcion: 'Creación y composición de componentes que se importan directamente, sin módulos.', tecnologias: ['Angular', 'TypeScript'] },
    { tipo: 'concepto', titulo: 'Enrutamiento', descripcion: 'Navegación entre páginas con Angular Router, rutas y router-outlet.', tecnologias: ['Angular Router'] },
    { tipo: 'concepto', titulo: 'Renderizado dinámico', descripcion: 'Generación de interfaz a partir de datos con @for, @if y @empty.', tecnologias: ['@for', '@if'] },
    { tipo: 'concepto', titulo: 'Interfaces y tipos', descripcion: 'Tipado de los datos con interface y type para evitar errores.', tecnologias: ['TypeScript'] },
    { tipo: 'concepto', titulo: 'Diseño con Bootstrap 5', descripcion: 'Grilla, tarjetas, navbar y utilidades; comportamiento con ng-bootstrap.', tecnologias: ['Bootstrap 5', 'ng-bootstrap'] },
    { tipo: 'concepto', titulo: 'Control de versiones', descripcion: 'Repositorio en GitHub, ramas y commits descriptivos.', tecnologias: ['Git', 'GitHub'] },
    { tipo: 'proyecto', titulo: 'Plataforma de eventos y reservas', descripcion: 'Aplicación web con vistas para cliente, agente y administrador.', tecnologias: ['Angular', 'Bootstrap', 'Git'] },
    { tipo: 'actividad', titulo: 'Parcial II: portafolio web', descripcion: 'Hoja de vida, aprendizaje del curso y página de tema libre.', tecnologias: ['Angular', 'ng-bootstrap', 'SCSS'] },
  ];

  get itemsFiltrados(): Item[] {
    if (this.filtro === 'todos') {
      return this.items;
    }
    return this.items.filter(i => i.tipo === this.filtro);
  }

  cambiarFiltro(valor: Filtro): void {
    this.filtro = valor;
  }
}