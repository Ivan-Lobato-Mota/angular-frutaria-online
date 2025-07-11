import { Component, inject, input } from '@angular/core';
import { Produto } from '../../../models/produtos.model';
import { CurrencyPipe } from '@angular/common';
import { Button } from "../../../components/button/button";
import { Carrinho } from '../../../services/carrinho';



@Component({
  selector: 'app-itens-carrinho',
  imports: [CurrencyPipe, Button],
  templateUrl: './itens-carrinho.html',
  styleUrl: './itens-carrinho.scss'
})
export class ItensCarrinho {
  item = input.required<Produto>();

  carrinhoServico = inject(Carrinho);

}
