import { Component, OnInit } from '@angular/core';
import{ faPython,faAngular,faJava,faJs,faNodeJs,faReact,faHtml5,faBootstrap } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  icons=[faPython,faAngular,faJava,faJs,faNodeJs,faReact,faHtml5,faBootstrap];
  colors=['#ac0412','#f12536','white','yellow','#094faa','#3080e7','#ee491f','#8f30e7'];
  constructor() { }

  ngOnInit(): void {
  }

  downloadCV(){
    window.open('assets/files/CV Eliran Gabay-V.pdf', '_blank');
  }
}
