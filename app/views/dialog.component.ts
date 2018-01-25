import {Component, NgModule, Pipe, OnInit, Inject, Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { User } from './../reactive-form/reactive-form-model';
import { ListTableService } from './../services/list-table.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Component({
    selector: 'your-dialog-selector',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
  })
  
  export class DialogComponent {
    constructor(private fb: FormBuilder,  private _listTableService: ListTableService, public dialogRef: MatDialogRef<DialogComponent>) {}
    user: FormGroup;
    allUsers: string[];
    userDatas = {
      id: '',
      userId: "",
      title:'',
      body:''
    };
   
    @Input() 
    userData : object; 

    ngOnInit() {
      this.user = this.fb.group({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        body: new FormControl('', Validators.required)
      });
    }
  
    update() {
      this.dialogRef.close();
      return this._listTableService.update(this.userDatas,this.userDatas.id).subscribe(
      res => {
            this.allUsers = res;
      });
     
    }
  


  }