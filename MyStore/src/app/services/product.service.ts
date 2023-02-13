import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Specify the endpoint for the api call.
  url: string = '../../assets/data.json';
  // Inject the HttpClient dependency.
  constructor(private http: HttpClient) {}

  // A method to get all products from the specified endpoint.
  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }
}
