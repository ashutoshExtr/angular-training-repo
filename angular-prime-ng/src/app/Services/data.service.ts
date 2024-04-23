import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    apiUrl: string = 'https://inshorts.deta.dev/news?category=technology';
  
    constructor(private http: HttpClient) { }
  
    getImageUrl(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
}