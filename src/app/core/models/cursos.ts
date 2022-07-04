export interface Cursos {
  id: number;
  nome: string;
  imagem: string;
  curso: string;
  duracao: string;
  descricao: string;
  valor: number;
  emPromocao: boolean;
  desconto?: number;
}