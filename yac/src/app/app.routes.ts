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
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'sample',
    loadComponent: () => import('./pages/sample/sample.page').then( m => m.SamplePage)
  },   
  {
    path: 'receipts',
    loadComponent: () => import('./pages/receipts/receipts.page').then( m => m.ReceiptsPage)
  },
];
