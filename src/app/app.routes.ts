import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'Inicio',
    component: Dashboard
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'Inicio'
  }
];
