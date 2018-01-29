import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseModule } from './expense/expense.module';
import { FormsModule } from '@angular/forms';
import { HnDateService } from './services/hn-date.service';
import { ProfileComponent } from './profile/profile.component';

// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// jwt and auth0
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions, HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { ScopeGuardService } from './auth/scope-guard.service';
import { ExpenseComponent } from './expense/expense.component';
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  console.log('Using the authHttpServiceFactory');
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

// loading routes from child modules this way will lazy load them
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'expense',
    component: ExpenseComponent,
    children: [
      { path: 'expense', loadChildren: './expense/expense.module#ExpenseModule' },
      // { path: 'EpicDiet', loadChildren: './Assign-Force/assign-force.module#AssignForceModule' },
      { path: '**', pathMatch: 'full', redirectTo: '/dashboard', canActivate: [AuthGuardService] }
    ]
  },
  {  path: 'epicdiet', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  {  path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: '', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false }), // useHash url/#
    BrowserModule,
    ExpenseModule,
    HttpModule,
    FormsModule // ngModule in html login
  ],
  providers: [
    HnDateService,
    AuthService,
    AuthGuardService,
    ScopeGuardService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
