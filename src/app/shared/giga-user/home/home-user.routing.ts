import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const HOME_USER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

export const HomeUserRoutingModule = RouterModule.forChild(HOME_USER_ROUTES);
