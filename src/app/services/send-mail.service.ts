import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  readonly ROOT_URL: any;
  constructor(private http:HttpClient) { 
    this.ROOT_URL = "http://localhost:3000/";
  }

  sendMailPost(payload:Object){
    return this.http.post(`https://sendmailserves.netlify.app/.netlify/functions/api/msg`,payload);
  }
}


