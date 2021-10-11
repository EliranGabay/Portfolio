import { Component, OnInit } from '@angular/core';
import{faShare}from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {
  faShare=faShare;
  constructor() { }

  ngOnInit(): void {
  }

}
