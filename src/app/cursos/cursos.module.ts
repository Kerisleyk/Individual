import { WrapPipe } from './../shared/pipe/wrap/wrap.pipe';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListagemCursosComponent } from './listagem-cursos/listagem-cursos.component';
import { AdicaoCursosComponent } from './adicao-cursos/adicao-cursos.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PercentagePipe } from '../shared/pipe/percentage/percentage.pipe';


@NgModule({
  declarations: [
    ListagemCursosComponent,
    AdicaoCursosComponent,
    PercentagePipe,
    WrapPipe
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
   
    
  ]
})
export class CursosModule { }
