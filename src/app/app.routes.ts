import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'contador',
    loadComponent: () => import('./pages/contador/contador.page').then( m => m.ContadorPage)
  },
  {
    path: 'tutorial',
    loadComponent: () => import('./pages/tutorial/tutorial.page').then( m => m.TutorialPage)
  },
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full',
  },
];
