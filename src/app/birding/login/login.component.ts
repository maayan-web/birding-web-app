import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  label = {
    username: 'שם משתמש',
    password: 'סיסמה',
    register: 'להרשמה'
  };
  btn = {
    submit: 'התחבר',
  };

  constructor() {
  }
  ngOnInit(): void {

  }
  submit(value: any): void {

    console.log('on submit', value);

  }

}
