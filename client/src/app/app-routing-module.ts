import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '',  component: HomeComponent},
  { path: 'dashboard',  component: DashboardComponent},  
  { path: 'register',  component: RegisterComponent},  
  { path: 'login',  component: LoginComponent},  
  { path: '**',  component: HomeComponent}  
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    providers: [],
    bootstrap: [],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
  