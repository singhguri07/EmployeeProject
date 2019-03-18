import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DbserviceService } from '../service_files/dbservice.service';
import {Response} from '@angular/http/src/static_response';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  selectedOption:string="";
  disp1:boolean=true;
  admin:boolean;
  manb:boolean;
  empb:boolean;
  us:string="admin";
  usa:string="Admin";
  pwd:string="admin";
  emp="Employee";
  
  man="Manager";
  user:users={"id":"","pass":"","type":""};
  constructor(private dbservice:DbserviceService) { }

  selectChangeHandler(event:any)
  {
    this.selectedOption=event.target.value;
   
  }

  ngOnInit() {
    this.form=new FormGroup(
      {
        userid:new FormControl("",Validators.required),
        pass:new FormControl("",Validators.required)
       
      }
    );
  }

  onSubmit(myform)
  {
    this.dbservice.getUser(myform.userid).subscribe(
      (response:Response)=>
      {
        this.user=response.json()
        console.log(this.user)
        if(myform.userid==this.user.id&&myform.pass==this.user.pass&&this.selectedOption==this.user.type)
         {
          this.disp1=!this.disp1;
          if(this.selectedOption==this.usa)
            this.admin=!this.admin;
          else if(this.selectedOption==this.man)
            this.manb=!this.manb;
          else if(this.selectedOption==this.emp)
            this.empb=!this.empb;
          }
        
      }
    )

  }

}
