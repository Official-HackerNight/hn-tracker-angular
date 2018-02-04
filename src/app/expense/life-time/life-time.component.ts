import { Component, OnInit } from '@angular/core';
import { HnDateService } from '../../services/hn-date.service';
import { ExpenseApiService } from '../expense-services/expense-api.service';
import { Expense } from '../../entities/expense';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-life-time',
  templateUrl: './life-time.component.html',
  styleUrls: ['./life-time.component.css']
})
export class LifeTimeComponent implements OnInit, OnDestroy {
  today: number = Date.now();

  showLifeTimeExpense: boolean;

  expense$: Subscription;
  lifetimeExpenses = [];

  totalSpentLifetime = 3000;
  dayOfYear: number;
  spentPerDay: number;
  constructor(private hnDateService: HnDateService, private expenseService: ExpenseApiService) { }

  ngOnInit() {
    this.dayOfYear = this.hnDateService.setDayOfTheYear();
    this.spentPerDay =  this.totalSpentLifetime / this.dayOfYear;
    this.expense$ = this.expenseService.expenses$.subscribe( resp => this.lifetimeExpenses = resp);
  }

  ngOnDestroy() {
    this.expense$.unsubscribe();
  }

}
