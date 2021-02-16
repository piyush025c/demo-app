import { Injectable } from '@angular/core';
import { SalesRep } from './sales-rep';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesRepsService {

  private baseUrl="http://localhost:8080/demorest/webapi/salesrep/";
  rep:SalesRep;
  

  constructor( private http: HttpClient) { }

  getSalesReps():Observable <SalesRep[]>
  {
      return this.http.get<SalesRep[]>(`${this.baseUrl}all`);
  }

  deleteSalesRep(id: number): Observable<any> {

    console.log("Deleted ID: "+id);
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }

  addSalesRep(rep:SalesRep)
  {
    
    return this.http.post(`${this.baseUrl}add`,rep);
  }

  updateSalesRep(rep:SalesRep)
  {

    return this.http.put(`${this.baseUrl}update`,rep);
  }

  searchReps(pattern:string):Observable <SalesRep[]>
  {
    return this.http.get<SalesRep[]>(`${this.baseUrl}search?prefix=${pattern}`);
  }

}
