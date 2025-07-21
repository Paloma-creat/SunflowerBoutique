import { Routes } from '@angular/router';
import { loginGuard } from './guard/login.guard';

export const routes: Routes = [
    {
    path: 'homeprincipal',
    //canActivate: [loginGuard],//
    loadComponent: () => import('./pages/homeprincipal/homeprincipal.component').then(m => m.HomePrincipalComponent)
  },
  {
    path: 'lancamento',
   // canActivate: [loginGuard],//
    loadComponent: () => import('./pages/lancamento/lancamento.component').then(m => m.LancamentoComponent)
  },
  {
    path: 'contato',
    //canActivate: [loginGuard],//
    loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'home',
    canActivate: [loginGuard],
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'dashboard',
    canActivate: [loginGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
   {
    path: '',
    redirectTo: 'homeprincipal',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];