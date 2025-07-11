import { Component, signal } from '@angular/core';
import { Produto } from '../../models/produtos.model';
import { CaixaProduto } from "./caixa-produto/caixa-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CaixaProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.scss'
})
export class ListaProdutos {
  Produtos = signal<Produto[]>([
    {id: 1, nome: 'Maçã Kg', valor: 25.55, urlimagem: '/assets/fruta_maca.png', estoque: 20,},
    {id: 2, nome: 'Pera Kg', valor: 18.29, urlimagem: '/assets/fruta_pera.png', estoque: 12,},
    {id: 3, nome: 'Banana Kg', valor: 7.99, urlimagem: '/assets/fruta_banana.png', estoque: 0,},
    {id: 4, nome: 'Caqui Kg', valor: 10.00, urlimagem: '/assets/fruta_caqui.png', estoque: 54,},
    {id: 5, nome: 'Uva Terci Kg', valor: 16.75, urlimagem: '/assets/fruta_uva.png', estoque: 61,},
    {id: 6, nome: 'Abacate Kg', valor: 28.12, urlimagem: '/assets/fruta_abacate.png', estoque: 75,},
    {id: 7, nome: 'Carambola Kg', valor: 12.25, urlimagem: '/assets/fruta_carambola.png', estoque: 100,},
    {id: 8, nome: 'Laranja Kg', valor: 20.00, urlimagem: '/assets/fruta_laranja.png', estoque: 55,},
    {id: 9, nome: 'Limão Kg', valor: 19.98, urlimagem: '/assets/fruta_limao.png', estoque: 4,},
    {id: 10, nome: 'Melancia Kg', valor: 5.67, urlimagem: '/assets/fruta_melancia.png', estoque: 32,},
    {id: 11, nome: 'Amora Kg', valor: 14.86, urlimagem: '/assets/fruta_amora.png', estoque: 64,},
    {id: 12, nome: 'Abacaxi Kg', valor: 19.52, urlimagem: '/assets/fruta_abacaxi.png', estoque: 11,},
  ]);
}
