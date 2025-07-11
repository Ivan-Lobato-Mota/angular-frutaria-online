import { Component, inject } from '@angular/core';
import { Carrinho } from '../../services/carrinho';
import { ItensCarrinho } from "./itens-carrinho/itens-carrinho";

@Component({
  selector: 'app-carrinho-pagina',
  imports: [ItensCarrinho],
  templateUrl: './carrinho-pagina.html',
  styleUrl: './carrinho-pagina.scss'
})
export class CarrinhoPagina {
 carrinhoServico = inject(Carrinho);
}
