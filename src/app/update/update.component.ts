import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Response} from '@angular/http/src/static_response';
import { DbserviceService } from '../service_files/dbservice.service';
import { users } from '../emp';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  form;
  disp2:boolean=false;
  mod:boolean;
  selectedOption;
  user:users={"id":"","pass":"","type":"","name":"","email":"","mob":"","desig":""};
  constructor(private dbservice:DbserviceService) { }

  ngOnInit() {
    this.form=new FormGroup(
      {
        userid:new FormControl("",Validators.required)

      }
    );
  }
  selectedHandler(event:any)
  {
    this.selectedOption=event.target.value;
    console.log(this.selectedOption);
  }
  modify()
  {
    this.mod=true;
  }
  onSubmit(myform)
  {
    console.log("jhesw");
      this.disp2=true;
      this.dbservice.getUser(myform.userid).subscribe(
        (response:Response)=>this.user=response.json()
      )
  }
}
