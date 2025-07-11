import { Injectable, signal } from '@angular/core';
import { Produto } from '../models/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class Carrinho {

  carrinho = signal<Produto[]>([]);

  adicionarAoCarrinho(produto: Produto){

    this.carrinho.set([...this.carrinho(), produto]);

  }

  removerDoCarrinho(id: number){
    this.carrinho.set(this.carrinho().filter((p) => p.id !== id));


  }
  
  constructor() { }
}
