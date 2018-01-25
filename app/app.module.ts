import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NgModule } from '@angular/core';
import { WebStorageModule } from 'ngx-store';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatCardModule,
  MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule,
  MatAutocompleteModule, MatChipsModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatSlideToggleModule, MatRadioModule, MatDatepickerModule,
  DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, NativeDateAdapter, MatExpansionModule, MatGridListModule, MatDialogModule, MatTabsModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {ShareModule} from 'ng2share/share.module';
import { MdlModule } from '@angular-mdl/core';

/* import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ShareButtonModule } from 'ngx-sharebuttons';
import { CeiboShare } from 'ng2-social-share';
 */

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { TableFilteringExample } from './views/list-table/list-table.component';
import { ListTableService } from './services/list-table.service';
import { TableBasicExampleComponent} from './views/data-table/data-table.component';
import { DialogComponent } from './views/dialog.component';
import { ModelDataComponent } from './model-data/model-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { FormBuilderAddComponent } from './views/form-builder-add/form-builder-add.component';
import { FormBuilderEditComponent } from './views/form-builder-edit/form-builder-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TableFilteringExample,
    TableBasicExampleComponent,
    DialogComponent,
    ModelDataComponent,
    ReactiveFormComponent,
    LoginComponent,
    FormBuilderAddComponent,
    FormBuilderEditComponent,
    //CeiboShare
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    WebStorageModule,
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
    ShareModule,
    MdlModule,
    //ShareButtonsModule.forRoot(),
   // ShareButtonModule.forRoot(),
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
    MatDialogModule,
    MatTabsModule
  ],
  
  entryComponents: [ DialogComponent ],
  providers: [ListTableService, NativeDateAdapter, CookieService, FormBuilderAddComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
