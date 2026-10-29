import { Component } from '@angular/core';
import { CvPerfilComponent } from '../../components/cv/cv-perfil/cv-perfil.component';
import { CvContactoComponent } from '../../components/cv/cv-contacto/cv-contacto.component';
import { CvFormacionComponent } from '../../components/cv/cv-formacion/cv-formacion.component';
import { CvHabilidadesComponent } from '../../components/cv/cv-habilidades/cv-habilidades.component';
import { CvExperienciaComponent } from '../../components/cv/cv-experiencia/cv-experiencia.component';

@Component({
  selector: 'app-hoja-de-vida-page',
  imports: [
    CvPerfilComponent,
    CvContactoComponent,
    CvFormacionComponent,
    CvHabilidadesComponent,
    CvExperienciaComponent
  ],
  templateUrl: './hoja-de-vida.page.html',
  styleUrl: './hoja-de-vida.page.scss'
})
export class HojaDeVidaPage {}