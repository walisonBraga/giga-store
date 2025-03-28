import { Routes } from '@angular/router';
import { HomeComponent } from './shared/giga-user/home/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home' // Corrigido para um título mais adequado
    },
  },

  // Exemplo de rota adicional para uma página de usuários
  {
    path: 'users',
    loadChildren: () => import('./shared/giga-user/home/components/home.module')
      .then(m => m.HomeModule),
    data: {
      title: 'Users'
    },
  },

  // Rota coringa para redirecionar para a página inicial
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
