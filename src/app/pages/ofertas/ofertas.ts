import { Component, signal } from '@angular/core';
import { Produto } from '../../models/produtos.model';
import { CaixaProduto } from "../lista-produtos/caixa-produto/caixa-produto";

@Component({
  selector: 'app-ofertas',
  imports: [CaixaProduto],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.scss'
})
export class Ofertas {
  Produtos = signal<Produto[]>([]);
}

