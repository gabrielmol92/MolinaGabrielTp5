import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  urlbase: string = "http://localhost:3000/api/"
  constructor(private _http : HttpClient) { }



   
  public getMonedas():Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com',
    'X-RapidAPI-Key': '34fcacc1efmsh9382fbf28eb251bp11c3e5jsn1fe42b504454',
    }),
    }
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies", httpOptions);
    }


   public getConvert(amount: number ,from: string, to: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com',
      'X-RapidAPI-Key': '34fcacc1efmsh9382fbf28eb251bp11c3e5jsn1fe42b504454',
      }),
      }
      return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/convert?from="+from+"&to="+to+"&amount="+amount+"", httpOptions);
      
   }

   public createTransaction(transaccion : Transaccion): Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
       {
          "Content-type" : "application/json"
       }
      ),
      params: new HttpParams()
    }

    let body = JSON.stringify(transaccion);
     return this._http.post(this.urlbase+"transaccion",body,httpOption)
 
   }


   public getTransacciones(): Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
       {
          
       }
      ),
      params: new HttpParams()
     }
     return this._http.get(this.urlbase+"transaccion",httpOption)
    }
  
    public getTransaccionesPorFiltro(desde: string , hasta : string): Observable<any>{
      let httpOption={
        headers: new HttpHeaders(
         {
            
         }
        ),
        params: new HttpParams().append("monedaOrigen",desde)
                                .append("monedaDestino",hasta)
       }
       return this._http.get(this.urlbase+"transaccion/divisas",httpOption)
    }
    

   
    
   }











 


