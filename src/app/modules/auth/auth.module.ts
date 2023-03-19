import { RegisterComponent } from './../../components/auth/register/register.component';
import { LoginComponent } from './../../components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule],
})
export class AuthModule {}
