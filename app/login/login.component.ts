import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
loginText: boolean = true;
emailFormControl: any;
  constructor() { }

  ngOnInit() {

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);

  }

}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;