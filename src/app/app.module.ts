import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseModule } from './expense/expense.module';
import { FormsModule } from '@angular/forms';
import { HnDateService } from './services/hn-date.service';


// loading routes from child modules this way will lazy load them
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LoginComponent,
    children: [
      {  path: 'epicdiet', component: LoginComponent },
      { path: 'expense', loadChildren: './expense/expense.module#ExpenseModule' },
      // { path: 'EpicDiet', loadChildren: './Assign-Force/assign-force.module#AssignForceModule' },
      { path: '**', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  },
  {  path: 'dashboard', component: DashboardComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false }), // useHash url/#
    BrowserModule,
    ExpenseModule,
    FormsModule // ngModule in html login
  ],
  providers: [HnDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
