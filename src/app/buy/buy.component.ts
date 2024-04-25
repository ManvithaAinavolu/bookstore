import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }
  OrderForm() {
    this.router.navigate(['/order']);
  }
  loadBooks(): void {
    this.http.get<any[]>('http://localhost:4000/buy')
      .pipe(
        catchError(error => {
          console.error('Error loading books:', error);
          return throwError('Failed to load books. Please try again later.');
        })
      )
      .subscribe(
        (books) => {
          this.books = books;
        }
      );
  }

  getImageUrl(imagePath: string): string {
    return `http://localhost:4000/${imagePath}`;
  }

  handleImageError(event: any): void {
    console.error('Error loading image:', event);
  }
}
