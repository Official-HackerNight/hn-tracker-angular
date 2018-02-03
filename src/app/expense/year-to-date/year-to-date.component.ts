import { Component, OnInit } from '@angular/core';
import { HnDateService } from '../../services/hn-date.service';
import { ExpenseApiService } from '../expense-services/expense-api.service';
import { Expense } from '../../entities/expense';

@Component({
  selector: 'app-year-to-date',
  templateUrl: './year-to-date.component.html',
  styleUrls: ['./year-to-date.component.css']
})
export class YearToDateComponent implements OnInit {

  today: number = Date.now();

  test: any;

  testExpense: Expense;

  totalSpentForYear = 3000;
  dayOfYear: number;
  spentPerDay: number;
  constructor(private hnDateService: HnDateService, private expenseService: ExpenseApiService) { }

  ngOnInit() {
    this.dayOfYear = this.hnDateService.setDayOfTheYear();
    this.spentPerDay =  this.totalSpentForYear / this.dayOfYear;
    this.test = this.expenseService.expenses$.subscribe();
    // works!
    // this.expenseService.persistExpense(new Expense(1, 'testing angular', 1, null, null, null));
  }

}
