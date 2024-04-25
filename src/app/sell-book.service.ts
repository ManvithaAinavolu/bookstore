import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellBookService {

  private sellBookUrl = 'http://localhost:4000/sell-book'; 

  constructor(private http: HttpClient) { }

  sellBook(formData: any): Observable<any> {
    return this.http.post<any>(this.sellBookUrl, formData);
  }
}
