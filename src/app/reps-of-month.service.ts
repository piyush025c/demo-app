import { Injectable } from '@angular/core';
import { RepOfMonth } from './rep-of-month-details'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepsOfMonthService {

  private baseUrl="http://localhost:8080/demorest/webapi";

  constructor( private http: HttpClient) { }

  getReps(month,product):Observable <RepOfMonth[]>
  {

      return this.http.get<RepOfMonth[]>(`${this.baseUrl}/repOfMonth?month=${month}&product=${product}`);
  }
}
