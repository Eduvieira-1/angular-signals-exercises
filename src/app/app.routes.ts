import { Routes } from '@angular/router';
import { Exercise1Component } from './exercise-1/exercise-1.component';

export const routes: Routes = [
  { path: 'exercise1', component: Exercise1Component },
  { path: '', redirectTo: '/exercise1', pathMatch: 'full' },
];
