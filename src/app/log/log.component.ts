// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  username: string='';
  password: string='';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const userData = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:4000/login', userData)
      .subscribe(
        (response) => {
          console.log('Login successful:', response);
          // Navigate to home page after successful login
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login error:', error);
          // Handle login error
        }
      );
  }
}
