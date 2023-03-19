import { loginInterface } from '../authInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: loginInterface = {
    email: '',
    password: ''
  }

  login() {
    console.log(this.form);
  }

}
