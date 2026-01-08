import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';
  rememberDevice: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.router.navigate(['/layout']);
    } else {
      alert('Please enter username and password');
    }
  }

  

  forgotPassword() {
    
  }

  createAccount() {
    this.router.navigate(['/register']);
  }
}