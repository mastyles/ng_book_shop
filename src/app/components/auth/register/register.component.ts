import { Component } from '@angular/core';
import { loginInterface } from '../authInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  form: loginInterface = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  register() {
    console.log(this.form);
  }

}
