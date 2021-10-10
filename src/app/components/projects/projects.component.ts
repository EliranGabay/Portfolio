import { Component, OnInit,Input } from '@angular/core';
import{faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faGithub=faGithub;
  @Input() repos!:any[];
  

  constructor() { }
  ngOnInit(): void {
    
  }
}
