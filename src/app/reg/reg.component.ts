// reg.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  username: string='';
  email: string='';
  password: string='';
  cpassword: string='';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {
    if (this.password !== this.cpassword) {
      // Handle password mismatch error
      console.error("Passwords don't match");
      return;
    }

    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      cpassword: this.cpassword
    };

    this.http.post<any>('http://localhost:4000/reg', userData)
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // Redirect or show success message
          this.successMessage = 'Registered successfully!';
          setTimeout(() => {
            this.router.navigate(['/log']);
          }, 2000); // Navigate after 2 seconds
        },
        
        (error) => {
          console.error('Registration error:', error);
          // Handle registration error
        }
      );
  }
}
