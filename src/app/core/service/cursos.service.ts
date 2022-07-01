import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Cursos[] = [
    {
      nome: 'material',
      imagem: 'https://descargarsoftwaregratis.com/wp-content/uploads/2021/10/Angular-Desde-Cero.jpeg',
      curso: 'material angular',
      duracao: '4 meses',
      descricao: 'Curso Completo de AngularMaterial',
      valor: 1,
      emPromocao: true,
      valorComDesconto: 3,
      desconto: 4,


    },
    {
      nome: 'Spring Boot',
      imagem: 'http://rdrblog.com.br/wp-content/uploads/2020/08/Spring-BOOT-Interview-questions-1.jpg',
      curso: 'Spring',
      duracao: '4 meses',
      descricao: 'Curso Completo de springBoot',
      valor: 1,
      emPromocao: true,
      valorComDesconto: 3,
      desconto: 4,
    },
  ]

  getCursos(): Cursos[] {
    return this.cursos;
  }

  addCursos(cursos: Cursos) {
    this.cursos.push(cursos);
  }

  deleteCursos(cursos: Cursos) {
    this.cursos.splice(-1, 1);
  }

  constructor() { }
}
