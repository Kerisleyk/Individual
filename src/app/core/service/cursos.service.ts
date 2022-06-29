import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Cursos [] = [
    {
    nome: 'material',
    imagem: 'https://descargarsoftwaregratis.com/wp-content/uploads/2021/10/Angular-Desde-Cero.jpeg',
    curso: 'material angular',
    duracao: '4 meses',
    descricao: 'asdasdasd',
  },
  {
    nome: 'material',
    imagem: 'https://descargarsoftwaregratis.com/wp-content/uploads/2021/10/Angular-Desde-Cero.jpeg',
    curso: 'material angular',
    duracao: '4 meses',
    descricao: 'asdasdasd',
  },    
]  

getCursos(): Cursos[]{
  return this.cursos;
}

addCursos(cursos: Cursos){
  this.cursos.push(cursos);
}

  constructor() { }
}
