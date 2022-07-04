import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Cursos[] = [
    {
      id: 0,
      nome: 'material',
      imagem: 'https://descargarsoftwaregratis.com/wp-content/uploads/2021/10/Angular-Desde-Cero.jpeg',
      curso: 'material angular',
      duracao: '4 meses',
      descricao: 'Curso Completo de AngularMaterial',
      valor: 82,
      emPromocao: true,
      desconto: 4,


    },
    {
      id: 1,
      nome: 'Spring Boot',
      imagem: 'http://rdrblog.com.br/wp-content/uploads/2020/08/Spring-BOOT-Interview-questions-1.jpg',
      curso: 'Spring',
      duracao: '4 meses',
      descricao: 'Curso Completo de springBoot',
      valor: 53,
      emPromocao: true,
      desconto: 4,
    },


  ]

  getCursos(): Cursos[] {
    return this.cursos;
  }

  addCursos(cursos: Cursos) {
    this.cursos.push(cursos);
  }

  deleteCursos(number:number) {
    this.cursos.splice(number,1)
  }

  constructor() { }
}
