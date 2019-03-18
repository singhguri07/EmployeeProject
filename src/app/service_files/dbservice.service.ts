import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

import {Response} from'@angular/http/src/static_response';
import { Observable } from 'rxjs';
import 'rxjs/rx';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  url:string="http://localhost:3000/users/";

  constructor(private http:Http) { }

  getUser(id)
  {
    return this.http.get(this.url+id)
    .map((response:any)=>response)
  }
}
