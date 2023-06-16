import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlbase: string = "http://localhost:3000/api/"
  constructor(private _http : HttpClient) { }

  public createTicket(ticket : Ticket) : Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
       {
          "Content-type" : "application/json"
       }
      ),
      params: new HttpParams()
    }

    let body = JSON.stringify(ticket);
     return this._http.post(this.urlbase+"ticket",body,httpOption)
  }


  public getTicket(id : string) : Observable<any> {
    let httpOption={
      headers: new HttpHeaders(
       {
          
       }
      ),
      params: new HttpParams()
                              
     }
     return this._http.get(this.urlbase+"ticket/"+id,httpOption)
  }
  

  public getAllTickets(): Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
       {
          
       }
      ),
      params: new HttpParams()
                              
     }
     return this._http.get(this.urlbase+"ticket/",httpOption)
  }
}
