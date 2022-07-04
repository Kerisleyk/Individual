import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/core/models/cursos';
import { CursosService } from 'src/app/core/service/cursos.service';

@Component({
  selector: 'app-listagem-cursos',
  templateUrl: './listagem-cursos.component.html',
  styleUrls: ['./listagem-cursos.component.scss']
})
export class ListagemCursosComponent implements OnInit {

  cursos: Cursos[] = []
 index:number[]= []

deletarCurso(number:number){
  this.cursosService.deleteCursos(number)
}

  constructor(
    private cursosService: CursosService,
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.cursos
    for (let i = 0; i < this.cursos.length; i++) {
      this.index.push(i) 
    }
    
  }

}