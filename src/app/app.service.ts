import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://openlibrary.org/search.json?q=';

  getUsers() {
    return this.http.get(this.rootURL);
  }

}
