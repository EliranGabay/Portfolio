import { Component } from '@angular/core';
import{GithubApiService}from './services/github-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'portfolio';

  repos!: String[];
  config:any;
  fullpage_api:any;
  

  constructor(private githubService:GithubApiService) {
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: null,
      anchors: ['Home','Projects','Contact'],
      navigation: false,
    };
  }

  ngOnInit() {
    this.githubService.getData().subscribe((data)=>{
      this.repos = data;
      console.log(this.repos);
    })
  }

  getRef(fullPageRef:any) {
    this.fullpage_api = fullPageRef;
  }
}
