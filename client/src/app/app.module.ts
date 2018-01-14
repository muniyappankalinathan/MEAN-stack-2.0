import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatCardModule,
  MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule,
  MatAutocompleteModule, MatChipsModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatSlideToggleModule, MatRadioModule, MatDatepickerModule,
  DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, NativeDateAdapter, MatExpansionModule, MatGridListModule, MatDialogModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdlModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatAutocompleteModule,
    HttpModule,
    AppRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [NativeDateAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
