import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListagemCursosComponent } from './listagem-cursos/listagem-cursos.component';
import { AdicaoCursosComponent } from './adicao-cursos/adicao-cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ListagemCursosComponent,
    AdicaoCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    AuthRoutingModule,
    MaterialModule,
    
  ]
})
export class CursosModule { }
