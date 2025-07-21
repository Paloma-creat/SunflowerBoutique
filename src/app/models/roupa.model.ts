export interface Roupa {
  id: number;
  nome: string;
  tipoDeTecido: string;
  tamanhos: string[];
  img: string;
}

export interface EstoqueInfo {
  id: number;
  nome: string;
  quantidade: number[];
  tamanhos: string[];
  img: string;
}
