import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense.component';

export const routes: Routes = [
  { path: '', component: ExpenseComponent },
  { path: 'expense', component: ExpenseComponent },
];

