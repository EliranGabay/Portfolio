import { Component, OnInit } from '@angular/core';
import{faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faLinkedin=faLinkedin;
  faGithub=faGithub;
  navbarVisible = false;
  navbarOpen=true;
  constructor() { }

  ngOnInit(): void {
  }

  collapseNav(){
    this.navbarVisible = !this.navbarVisible;
  }
  navOpen(){
    this.navbarOpen = !this.navbarOpen;
  }
}
