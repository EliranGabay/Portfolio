import { Component, OnInit } from '@angular/core';
import{faShare}from '@fortawesome/free-solid-svg-icons'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{SendMailService} from 'src/app/services/send-mail.service';
@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {
  faShare=faShare;
  form!: FormGroup;
  sendMsg=false;
  constructor(private formBuilder: FormBuilder,private sendMailService:SendMailService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:  [null, [Validators.required]],
      mobile:  [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      msg: [null, Validators.required],});
  }

  sendMail(){
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(this.form.controls.name.value).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
    this.sendMsg=!this.sendMsg;
    setTimeout(() => {this.sendMsg = !this.sendMsg}, 3000);
  }
}
