import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { Carrinho } from '../../services/carrinho';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  title = signal('Frutaria Online');

  showButtonClicked() {
    console.log("Botão Clicado!")
  }

  carrinhoServico = inject(Carrinho);
}
