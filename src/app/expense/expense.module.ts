import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './expense-routing';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { DayOfMonthComponent } from './day-of-month/day-of-month.component';
import { DayOfWeekComponent } from './day-of-week/day-of-week.component';
import { YearToDateComponent } from './year-to-date/year-to-date.component';
import { AllMonthsComponent } from './all-months/all-months.component';
import { ExpenseApiService } from './expense-services/expense-api.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    // Components
    ExpenseComponent,
    DayOfMonthComponent,
    DayOfWeekComponent,
    YearToDateComponent,
    AllMonthsComponent,
    NewExpenseComponent

    // Pipes
  ],
  providers: [
    ExpenseApiService,
    HttpClientModule
  ]
})
export class ExpenseModule { }
