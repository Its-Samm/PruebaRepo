import { Routes } from '@angular/router';
import { CurriculumPage } from './pages/curriculum/curriculum.page';
import { AprendizajePage} from './pages/aprendizaje/aprendizaje.page';
import { TemaLibrePage } from './pages/tema-libre/tema-libre.page';

export const routes: Routes = [
    {path: '', redirectTo: 'curriculum', pathMatch: 'full'},
    {
        path: 'curriculum',
        component: CurriculumPage
    },
    {
        path: 'aprendizaje',
        component: AprendizajePage
    },
    {
        path: 'tema-libre',
        component: TemaLibrePage
    },
    { path: '**', redirectTo: 'curriculum' },
];
