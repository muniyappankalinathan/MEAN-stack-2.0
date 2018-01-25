////// dynamic table
import { Title } from '@angular/platform-browser';
import {Component, NgModule, Pipe, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ListTableService } from './../../services/list-table.service';
import { DialogComponent } from './../dialog.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { CeiboShare } from 'ng2-social-share';

@Component({
  selector: 'app-table-basic-example',
  styleUrls: ['./data-table.component.css'],
  templateUrl: './data-table.component.html',
})

export class TableBasicExampleComponent {
  public allUsers: any = [];
  public editUsers: string[];
  public show: boolean = true;
  public checked: boolean = true;
  public selection = {
    ids: {}
  };
  public facebookInShareUrl: string;
  public googleInShareUrl: string;
  public linkedInShareUrl: string;
  public id: number = 1313;
  public title: string = "howdy";
  public repoUrl = 'https://plus.google.com';
  constructor(private _listTableService: ListTableService, public dialog: MatDialog) {}

  ngOnInit() {
      this.getUsers();
   }


   shareOnFacebook() {
    var group_url = "http://52.34.82.71/com/group_view/"+this.id;
    this.facebookInShareUrl = 'http://www.facebook.com/sharer.php?s=100&p[title]='+ this.title +'&p[url]='+ group_url;

    let popup = window.open(this.facebookInShareUrl, "myWindow", 'width=800,height=600');
}

shareOnLinkedIn() {
    var group_url = "http://52.34.82.71/com/group_view/"+this.id;
  this.linkedInShareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url='+ group_url +'&title='+ this.title;
  let popup = window.open(this.linkedInShareUrl, "myWindow", 'width=800,height=600');
}

shareOnGoogle() {
    var group_url = "http://52.34.82.71/com/group_view/"+this.id;
  this.googleInShareUrl = 'https://plus.google.com/share?url='+ group_url +'&title='+ this.title;
  let popup = window.open(this.googleInShareUrl, "myWindow", 'width=800,height=600');
}

   openDialog(datas) {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.userDatas.title = datas.title;
    dialogRef.componentInstance.userDatas.body = datas.body;
    dialogRef.componentInstance.userDatas.id = datas.id;
    dialogRef.componentInstance.userDatas.userId = datas.userId;
  }

   hide(){
     this.show = !this.show;
   }

   getUsers() {
        this._listTableService.getUsers()
        .subscribe(
       res => {
           this.allUsers = res;
           console.log(this.allUsers, 'allUsers');
     });
   }

   deleteItem(id){
    console.log(id, 'idddddddd');
    this._listTableService.deleteUser(id).subscribe();
   }

}




export interface Todo {
  title: string[],
  body: string[],
  userId: string[]
}


/* export class TableBasicExample{
  displayedColumns = ['id', 'first_name', 'last_name'];

  public allUsers:any = [];
  constructor(private _listTableService:ListTableService ) {}
  dataSource: ExampleDataSource;
  //greeter2 = new ExampleDataSource();
   ngOnInit() {
      this.getUsers();
      console.log(this.getUsers(),'data111');

   }
   getUsers(){
       return this._listTableService.getUsers().subscribe(
       res=>{
          return this.allUsers=res.data;
     });
   }
}

export interface Element {
  id: number;
  first_name: string;
  last_name: string;
}

let greeter1 = new TableBasicExample(this.ListTableService);
console.log(greeter1,'gree3');
const data = greeter1.getUsers();

console.log(data,'data111');

export class ExampleDataSource extends DataSource<any> {

  connect(): Observable<any> {
    return Observable.of(data);
  }

  disconnect() {}
}
 */

/*
import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'table-basic-example',
  styleUrls: ['./data-table.component.css'],
  templateUrl: './data-table.component.html',
})
export class TableBasicExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const data: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

export class ExampleDataSource extends DataSource<any> {

  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}*/
