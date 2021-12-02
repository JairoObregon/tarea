import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServeiceService {

  constructor(private http: HttpClient) { 
    

  }

  post(newa :any){
    return this.http.post("https://api.migo.pe/api/v1/ruc",{"token" : "iU5nwh6nCNqjeeuGZwVnPnbzey5pidD413WMeS1juHNEkxaVkmbd0U6aLe6c", "ruc": newa })
  }
}
