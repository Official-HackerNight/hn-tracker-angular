import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    hnUserUsername: '',
    hnUserPassword: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('logging in');
  }
}
