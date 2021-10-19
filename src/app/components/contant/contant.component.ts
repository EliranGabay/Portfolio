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
    this.sendMailService.sendMailPost({
      "name" : this.form.value.name,
      "mobile": this.form.value.mobile,
      "email": this.form.value.email,
      "text": this.form.value.msg
    }).subscribe(data=>console.log(data));
    this.form.reset();
    this.sendMsg=!this.sendMsg;
    setTimeout(() => {this.sendMsg = !this.sendMsg}, 3000);
  }
}
