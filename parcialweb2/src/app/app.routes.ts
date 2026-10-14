import { Routes } from '@angular/router';
import { HojaDeVida } from './pages/hoja-de-vida/hoja-de-vida';
import { Aprendizaje } from './pages/aprendizaje/aprendizaje';
import { TemaLibre } from './pages/tema-libre/tema-libre';

export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'hoja-de-vida', component: HojaDeVida },
  { path: 'aprendizaje', component: Aprendizaje },
  { path: 'tema-libre', component: TemaLibre },
];