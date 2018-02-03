import { Component, OnInit } from '@angular/core';
import { Expense } from '../../entities/expense';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  newExpense: Expense = {
    id: 0,
    amount: 20,
    userId: 'test',
    description: 'new expense testing',
    date: '',
    expenseType: 'single',
    isActive: true
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('newExpense submitted: ' + JSON.stringify(this.newExpense));
  }

}
