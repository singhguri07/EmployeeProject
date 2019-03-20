import { Component, OnInit } from '@angular/core';
import { AdminpanelComponent } from '../adminpanel/adminpanel.component';
import { DbserviceService } from '../service_files/dbservice.service';
import { users } from '../emp';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user:users[];
  index=["id","type","pass","name","email","mob","desig"];

  constructor(private dbservice:DbserviceService) { 

  }

  ngOnInit() {
  }

  displayAll()
  {
    this.dbservice.getAllUsers()
    .subscribe(
      (response:any)=>{this.user=response.json()}
    )
  }



}
