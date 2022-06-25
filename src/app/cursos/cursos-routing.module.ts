import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routesCursos: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routesCursos)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
