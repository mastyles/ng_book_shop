import { AuthService } from './../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { authInterface } from '../authInterface';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  form: authInterface = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.form);
  }

  isLoading(): boolean {
    return this.authService.isLoading;
  }

}
