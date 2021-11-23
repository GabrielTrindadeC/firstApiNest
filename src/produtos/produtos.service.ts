import { Injectable } from '@nestjs/common';
import { Produto } from './dto/produtos.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('liv01', 'Curso de Nest', 35),
    new Produto('liv02', 'Curso de Type', 36),
  ];
  getAll(): Produto[] {
    return this.produtos;
  }
  getOne(id: number): Produto {
    return this.produtos[0];
  }
  create(produto: Produto): void {
    this.produtos.push(produto);
  }
  change(produto: Produto): Produto {
    return produto;
  }
  delete(id: number): void {
    this.produtos.pop();
  }
}
