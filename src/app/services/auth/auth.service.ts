import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { authInterface } from 'src/app/components/auth/authInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordNotMatched: boolean = true;

  constructor(private router: Router) { }

  login(form: authInterface) {

    if(this.isLoading) {
      return;
    }

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert('Credentials do not match. Please try again!');
      }).finally( () => (this.isLoading = false) );
  }

  register(form: authInterface) {

    if(this.isLoading) {
      return;
    }

    this.isLoading = true;

    if(form.password !== form.confirmPassword) {
      this.passwordNotMatched = false;
      alert('Passwords do not match!');
      this.isLoading = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally( () => (this.isLoading = false) );

  }

  logout() {

    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
      this.router.navigate(['login']);
    }).catch((error) => {
      // An error happened.
    });

  }

}
