import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './expense-routing';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { DayOfMonthComponent } from './day-of-month/day-of-month.component';
import { DayOfWeekComponent } from './day-of-week/day-of-week.component';
import { YearToDateComponent } from './year-to-date/year-to-date.component';
import { AllMonthsComponent } from './all-months/all-months.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    // Components
    ExpenseComponent,
    DayOfMonthComponent,
    DayOfWeekComponent,
    YearToDateComponent,
    AllMonthsComponent

    // Pipes
  ]
})
export class ExpenseModule { }
