import { Injectable } from '@angular/core';
import config from '../../../config.json';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://newsapi.org/v2';
  apiKey = config.NEWS_API_KEY;

  totalPosts = null;
  pages: any; 

  constructor(private http: HttpClient) {}

  getTopNews(cat) {
    return this.http.get(
      `${this.url}/top-headlines?category=${cat}&country=us&apiKey=${
        this.apiKey
      }`
    ).pipe(map(res => res['articles']));
  }

  getSources() {
    return this.http.get(
      `${this.url}/sources?category=sports&language=en&apiKey=${
        this.apiKey
      }`
    ).pipe(map(res => res['sources']));
  }

  getRandomUser() {
    return this.http
    .get(
      `https://randomuser.me/api?results=20`
    )
    .pipe(map(res => res['results']));
  }

}
