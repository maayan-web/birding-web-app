import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  currentName: string;
  label = {
    name: 'First Name',
    firstname: 'First Name',
    lastname: 'Last Name',
    password: 'Password',
    phone: 'Phone',
    email: 'Email',
  };
  btn = {
    ok: 'legister',
    cancel: 'cancel',
  };
  controls = {
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    phone: 'phone',
    email: 'email',
  };
  nameControl = new FormControl();
  emailControl = new FormControl();

  rForm = this.fs.getForm();
  inputs = this.fs.inputs;
  constructor(private fs: FormService) { }

  ngOnInit() {
  }
  cancel() {
    this.rForm.reset();
  }
print(){}
}
