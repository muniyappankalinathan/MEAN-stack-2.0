import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {   FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from './../../reactive-form/reactive-form-model';
import { ListTableService } from './../../services/list-table.service';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';/* LocalStorage */
// import { FormBuilderEditComponent } from './../form-builder-edit/form-builder-edit.component';

import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

/* export class Person {
  constructor(
    public name: string,
    public hobbies: Hobby[],
    public id?: number
  ) { }
} */

/* export class Hobby {
  constructor(public id: number, public hobbyName: string) { }
}
 */

@Component({
  selector: 'app-form-builder-add',
  templateUrl: './form-builder-add.component.html',
  styleUrls: ['./form-builder-add.component.css']
})
export class FormBuilderAddComponent implements OnInit {

  hobbies = [
    {name:'CV Raman',selected: false, id: 1},
    {name:'Homi J. Bhabha',selected: false, id: 2},
    {name:'Visvesvaraya',selected: false, id: 3},
    {name:'Venkatraman Radhakrishnan',selected: false, id: 4},
    {name:'Chandrashekar',selected: false, id: 5},
    {name:'Satyendra Nath Bose',selected: false, id:6},
    {name:'Meghnad Saha',selected: false, id:7},
    {name:'Srinivasa Ramanujan',selected: false, id:8},
    {name:'Jagadish Chandra Bose',selected: false, id:9},
    {name:'Vikram Sarabhai',selected: false, id:10},
    {name:'Salim Ali',selected: false, id:11},
    {name:'Har Gobind Khorana',selected: false, id:12},
    {name:'Birbal Sahni',selected: false, id: 13},
    {name:'APJ Abdul Kalam',selected: false, id: 14}
  ];
  myForm: FormGroup;
  mySelectedHobbies;
  cookieValue: any = 'UNKNOWN';  
  
  constructor(private fb: FormBuilder, private cookieService: CookieService) { }

  get hobbiesList(): FormArray {
    return this.myForm.get('hobbiesList') as FormArray;
  };

  submitMe() {
    let items = this.myForm.value;
    this.mySelectedHobbies = items.hobbiesList.filter(x => x.selected).map(x => { return { name: x.name, id: x.id ,selected: x.selected}; });
    // this.cookieService.set( 'Test', 'Hello World' );
    // this.cookieValue = this.cookieService.get('Test');
    /* this._editData.scientists = this.mySelectedHobbies;
    this._editData.test();
    this._editData.test; */
    //console.log('--->>>>');   
    
  }
  // messageSource = new BehaviorSubject<any>(this.submitMe()).asObservable();;
  // currentMessage = this.messageSource.asObservable();
  
  ngOnInit() {
    let hobbiesArray = [];
    for (let hobby of this.hobbies) {
      hobbiesArray.push(this.fb.group({
        selected: false,
        name: hobby.name,
        id: hobby.id
      }));
    }
    this.myForm = this.fb.group({
      //name: ['', Validators.required],
      hobbiesList: this.fb.array(hobbiesArray)
    });
  }
}
