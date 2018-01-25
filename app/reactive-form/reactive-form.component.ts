import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './reactive-form-model';
import { ListTableService } from './../services/list-table.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  user: FormGroup;
  allUsers: string[];
  
  constructor(private fb: FormBuilder,  private _listTableService: ListTableService) {}
  
  ngOnInit() {
    this.user = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      body: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required)
    });
  }

  onSubmit({ value }: { value: User}) {
    return this._listTableService.create(value).subscribe(
    res => {
          this.allUsers = res;
    });
  }

}

