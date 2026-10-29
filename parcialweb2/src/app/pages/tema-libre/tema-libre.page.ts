import { Component } from '@angular/core';
import { Juego } from '../../models/tema';

@Component({
  selector: 'app-tema-libre-page',
  imports: [],
  templateUrl: './tema-libre.page.html',
  styleUrl: './tema-libre.page.scss'
})
export class TemaLibrePage {
  juegos: Juego[] = [
    { nombre: 'God of War', genero: 'Acción-aventura', anio: 2018, descripcion: 'Kratos y su hijo Atreus viajan por la mitología nórdica.' },
    { nombre: 'Fortnite', genero: 'Battle royale', anio: 2017, descripcion: 'Cien jugadores compiten solos o en equipo hasta quedar uno.' },
    { nombre: 'GTA V', genero: 'Acción-aventura', anio: 2013, descripcion: 'Mundo abierto desarrollado por Rockstar Games.' },
  ];
}