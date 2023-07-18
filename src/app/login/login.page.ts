import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
  userid: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  error = '';

  constructor(private database: DatabaseService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('userid') != null) {
      this.router.navigate(['/folder/home']);
    }
  }

  submitLogin() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.error = 'Fill out all missing values';
      return;
    }

    const user: User | undefined = this.database.users.find(
      (u: User) => u.email === this.email
    );

    if (user) {
      if (user.password === this.password) {
        localStorage.setItem('userid', user.userid);
        localStorage.setItem('useremail', user.email);

        this.router.navigate(['/folder/home']);
      } else {
        this.error = 'Incorrect password';
      }
    } else {
      this.error = 'Email does not exist';
    }
  }
}
