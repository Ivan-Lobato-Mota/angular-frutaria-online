import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Produto } from '../../../models/produtos.model';
import { PrimaryButton } from "../../../components/primary-button/primary-button";
import { Carrinho } from '../../../services/carrinho';

@Component({
  selector: 'app-caixa-produto',
  imports: [CurrencyPipe, PrimaryButton],
  templateUrl: './caixa-produto.html',
  styleUrl: './caixa-produto.scss'
})
export class CaixaProduto {

  carrinhoServico = inject(Carrinho);

 produto = input.required<Produto>();
}
