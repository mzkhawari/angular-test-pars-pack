import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseCrudService {

  constructor(private httpClient:HttpClient ) { }


  get():Observable<any>{
    return this.httpClient.get('assets/Services.json');
  }

}
