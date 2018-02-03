import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../../entities/expense';


@Injectable()
export class ExpenseApiService {

  private expenseSubject = new BehaviorSubject([]);

  // this is how components should access the data if you want to cache it
  expenses$: Observable<any> = this.expenseSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchExpenses();
   }

  fetchExpenses(): void {
    console.log('testing');
    this.httpClient.get('http://localhost:8090/api/v1/expense/1').toPromise().then(
      data => console.log('data from server: ' + data));
  }

  persistExpense(expense: Expense) {
    this.httpClient.post(`http://localhost:8090/api/v1/expense/create`, expense)
      .toPromise().then(() => console.log('Expense created'));
  }
}
