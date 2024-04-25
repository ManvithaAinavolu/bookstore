import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  form = {
    name: '',
    author: '',
    description: '',
    price: 0,
    other: '',
    bookimage: null as File | null
  };

  constructor(private http: HttpClient, private router: Router) {}

  sellBook() {
    const formData = new FormData();
    formData.append('name', this.form.name);
    formData.append('author', this.form.author);
    formData.append('description', this.form.description);
    formData.append('price', this.form.price.toString());
    formData.append('other', this.form.other);
    if (this.form.bookimage) {
      formData.append('bookimage', this.form.bookimage); // Append the selected image file if it exists
    }
    this.http.post('http://localhost:4000/sell-book', formData)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/thank']); 
        },
        (error) => {
          console.error(error);
          alert('Error registering book');
        }
      );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.bookimage = file; // Store the File object
      const reader = new FileReader();
      reader.onload = () => {
        // Optionally, you can also display a preview of the selected image on the frontend
        // For example: this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  
}
