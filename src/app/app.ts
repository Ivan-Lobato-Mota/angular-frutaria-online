import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ListaProdutos } from "./pages/lista-produtos/lista-produtos";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';



// Configura o Locale Brasileiro ********************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);
// **************************************************

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, CommonModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss',

  providers:    [
    // ************************************
    { provide: LOCALE_ID, useValue: 'pt' },
    // ************************************
  ],
})
export class App {
  protected title = 'angular-frutaria-online';

  showHead: boolean = false;

   ngOnInit() {
  }

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }
}
