import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from '../service_files/dbservice.service';
import { users } from '../emp';

@Component({
  selector: 'admin',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  disp2:boolean;
  disp1:boolean=true;
  disp3;
  disp4:boolean;
  
  user=["id","type","pass","name","email","mob","desig"];
  constructor(private routeService:Router,private dbservice:DbserviceService) { }

  ngOnInit() {
    
  }

  toggle()
  {
    this.disp1=!this.disp1;
    this.disp2=!this.disp2;
  }
  toggle1()
  { 
    this.disp2=false;
    this.disp3=true;
  }
  display()
  { 
    this.disp3=true;
   
  }
 
}
