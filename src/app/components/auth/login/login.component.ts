import { AuthService } from './../../../services/auth/auth.service';
import { authInterface } from '../authInterface';
import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  form: authInterface = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.form);
  }

  isLoading(): boolean {
    return this.authService.isLoading;
  }

}
