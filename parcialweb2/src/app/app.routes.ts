import { Routes } from '@angular/router';
import { HojaDeVidaPage } from './pages/hoja-de-vida/hoja-de-vida.page';
import { AprendizajePage } from './pages/aprendizaje/aprendizaje.page';
import { TemaLibrePage } from './pages/tema-libre/tema-libre.page';

export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'hoja-de-vida', component: HojaDeVidaPage },
  { path: 'aprendizaje', component: AprendizajePage },
  { path: 'tema-libre', component: TemaLibrePage },
];