import { Component, OnInit } from '@angular/core';
import { FormBuilderAddComponent } from './../form-builder-add/form-builder-add.component';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-form-builder-edit',
  templateUrl: './form-builder-edit.component.html',
  styleUrls: ['./form-builder-edit.component.css']
})
export class FormBuilderEditComponent implements OnInit {
  public checkboxValues: any;
scientists;
  constructor(public _addData: FormBuilderAddComponent) { }

  ngOnInit() {
   // this._addData.messageSource.subscribe(message => this.checkboxValues = message);
    //console.log(this.checkboxValues,'===>>>>checkboxValues');

    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  test(){
    console.log(this.scientists,'i am edit data');
    this.checkboxValues = this.scientists;
    this.scientists.subscribe(message => this.checkboxValues = message);
    console.log(this.scientists);
  }

}
