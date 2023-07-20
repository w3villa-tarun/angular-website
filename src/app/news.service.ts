import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = '231972cd9e554c7d9b3394d2bf875f3d';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) { }
  
  getTopHeadlines(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}?country=us&apiKey=${this.apiKey}`);



    "{this.apiUrl}?country=us&apiKey=${this.apiKey} "

    " https://newsapi.org/v2/top-headlines?country=us&apiKey=231972cd9e554c7d9b3394d2bf875f3d"

  }
}
