import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../../entities/expense';
import { AuthService } from '../../auth/auth.service';


@Injectable()
export class ExpenseApiService {

  // Cache expenses
  private expenseSubject = new BehaviorSubject<any>([]);
  expenses$: Observable<any> = this.expenseSubject.asObservable();


  // profile data
  profile: any;

  constructor(private httpClient: HttpClient, public auth: AuthService) {
    this.fetchExpenses();
    this.fetchExpenseLifeTimeTotal();

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  // FETCH
  fetchExpenses(): void {
    if (this.auth.userProfile) {
      console.log(`fetchExpenses using profile.sub:   ${this.profile.sub}`);
      this.httpClient.get(`http://localhost:8090/api/v1/expense/${this.profile.sub}/life`).toPromise().then(
        data => console.log(data));
    } else {
      console.log(`not ready yet..`);
    }
  }

  fetchExpenseLifeTimeTotal(): void {
     this.httpClient.get<Expense>('http://localhost:8090/api/v1/expense/1/life')
        .subscribe(resp => {
          console.log(resp);
          this.expenseSubject.next(resp);
        });
  }

  fetchExpenseYearTotal(): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:8090/api/v1/expense/1/year`);
  }

  // PERSISTENCE
  persistExpense(expense: Expense) {
    this.httpClient.post(`http://localhost:8090/api/v1/expense/create`, expense)
      .toPromise().then(() => console.log('Expense created'));
  }
}
