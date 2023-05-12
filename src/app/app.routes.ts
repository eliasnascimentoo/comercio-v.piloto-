import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./paginas/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./paginas/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'incluirdados',
    loadComponent: () => import('./paginas/incluirdados/incluirdados.page').then( m => m.IncluirdadosPage)
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./paginas/carrinho/carrinho.page').then( m => m.CarrinhoPage)
  },
  {
    path: 'contato',
    loadComponent: () => import('./paginas/contato/contato.page').then( m => m.ContatoPage)
  },
  {
    path: 'listacmp',
    loadComponent: () => import('./paginas/listacmp/listacmp.page').then( m => m.ListacmpPage)
  }

];
