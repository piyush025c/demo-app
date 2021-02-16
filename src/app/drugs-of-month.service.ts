import { Injectable } from '@angular/core';
import { DrugOfMonth } from './drug-of-month-details'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrugsOfMonthService {

  private baseUrl="http://localhost:8080/demorest/webapi/";

  constructor(private http: HttpClient) { }

  getDrugs(city):Observable <DrugOfMonth[]>
  {
      return this.http.get<DrugOfMonth[]>(`${this.baseUrl}drugOfMonth?city=${city}`);
  }
}
