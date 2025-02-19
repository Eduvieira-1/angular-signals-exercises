import { Routes } from '@angular/router';
import { Exercise1Component } from './exercise-1/exercise-1.component';
import { Exercise2Component } from './exercise-2/exercise-2.component';
import { Exercise3Component } from './exercise-3/exercise-3.component';

export const routes: Routes = [
  { path: 'exercise-1', component: Exercise1Component },
  { path: 'exercise-2', component: Exercise2Component },
  { path: 'exercise-3', component: Exercise3Component },
  { path: '', redirectTo: '/exercise1', pathMatch: 'full' },
];
