import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private _HttpClient:HttpClient) { }
  getHotelsDetails():Observable<any>{
    return this._HttpClient.get(`http://satafood.codesroots.com:3000/api/branches//homepage`);
  }
}
