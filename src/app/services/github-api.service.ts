import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{

    const url= "https://api.github.com/users/EliranGabay/repos"
    return this.http.get<any>(url)
    
  }
}
