import { CursosService } from 'src/app/core/service/cursos.service';
import { Cursos } from 'src/app/core/models/cursos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicao-cursos',
  templateUrl: './adicao-cursos.component.html',
  styleUrls: ['./adicao-cursos.component.scss']
})
export class AdicaoCursosComponent implements OnInit {
  cursos: Cursos = {} as Cursos
 
  constructor(  private cursosService: CursosService
  ) {}

  onSubmit() {
    alert(`Cursos ${this.cursos.nome} criado!`);
    this.cursosService.addCursos(this.cursos)
  }

  ngOnInit(): void {
    this.cursos.id=this.cursosService.cursos.length
  }
}