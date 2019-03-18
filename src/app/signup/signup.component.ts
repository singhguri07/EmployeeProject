import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form;

  constructor() { }

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
  onSubmit(myform)
  {

  }

}
