import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DbserviceService } from '../service_files/dbservice.service';
import { users } from '../emp';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form;
  disp1:boolean=true;
  disp2:boolean;
  selectedOption:string;
  user:users={"id":"","type":"","pass":"","name":"","email":"","mob":"","desig":""};
  user1;
  constructor(private dbservice:DbserviceService) { }

  ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl("",),
      email:new FormControl("",),
      mobile:new FormControl("",),
      userid:new FormControl("",),
      pass:new FormControl("",)

    }
      
    );
  }
  selectChangeHandler(event:any)
  {
    this.selectedOption=event.target.value;
    console.log(this.selectedOption);
   
  }
  onSubmit(myform)
  {
    this.disp1=!this.disp1;
    this.disp2=!this.disp2;
      let user1=new users(myform.userid,myform.pass,this.selectedOption,myform.name,myform.email,myform.mobile,this.selectedOption);
      console.log(user1);
      this.dbservice.postUser(user1)
      .subscribe(
        (response:any)=>console.log("Successfull")
      )
  }

}
