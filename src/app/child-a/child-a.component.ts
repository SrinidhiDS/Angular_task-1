import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordchecker } from '../validators/passwordchecker';


@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent {
logindata : any;
firstname : any;
lastname : any;
emailid : any;
address : any;
statement = "Successfully Logged IN"
ngOnInit(){
  this.logindata = new FormGroup({
    firstname : new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3)   
    ])),
    lastname : new FormControl(""),
    emailid : new FormControl("",Validators.compose([
      Validators.required,
      Validators.pattern('[^@]*@[^@]*')   
    ])),
    password : new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(8),
    ])),
    confirm_password : new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(8),
    ]))},[passwordchecker("password","confirm_password")]);
}
get getControl(){
  return this.logindata.controls;
}
onsubmit(){
  // this.firstname = data.firstname
  // this.lastname = data.lastname
  // this.emailid = data.emailid
  console.warn(this.logindata.value);
}
get Firstname(){
  return this.logindata.get('firstname');
}

get Lastname(){
  return this.logindata.get('lastname');
}

get Emailid(){
  return this.logindata.get('emailid');
}

get Password(){
  return this.logindata.get('password');
}

get Confirm_password(){
  return this.logindata.get('confirm_password');
}
}
