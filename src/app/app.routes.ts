import { Routes } from '@angular/router';
import { ListaProdutos } from './pages/lista-produtos/lista-produtos';
import { Carrinho } from './services/carrinho';
import { CarrinhoPagina } from './pages/carrinho-pagina/carrinho-pagina';
import { Configuracoes } from './pages/configuracoes/configuracoes';
import { Contato } from './pages/contato/contato';
import { Ofertas } from './pages/ofertas/ofertas';
import { Pedidos } from './pages/pedidos/pedidos';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ListaProdutos

},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'carrinho',
    component: CarrinhoPagina
},
{
    path: 'configuracoes',
    component: Configuracoes
},
{
    path: 'contato',
    component: Contato
},
{
    path: 'ofertas',
    component: Ofertas
},
{
    path: 'pedidos',
    component: Pedidos
},
];
