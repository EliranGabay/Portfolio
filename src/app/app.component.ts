import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'portfolio';

  config:any;
  fullpage_api:any;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['Home','Projects'],
      navigation: false,
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef:any) {
    this.fullpage_api = fullPageRef;
  }


}
