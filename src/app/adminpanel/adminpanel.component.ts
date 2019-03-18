import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  disp2:boolean;
  disp1:boolean=true;
  disp3;
  constructor(private routeService:Router) { }

  ngOnInit() {
  }
  toggle()
  {
    this.disp1=!this.disp1;
    this.disp2=!this.disp2;
  }
  toggle1()
  {
    this.disp1=false;
    this.disp2=false;
    this.disp3=!this.disp3;
  }
  abc()
  {
    this.routeService.navigate(['./signup']);
  }
}
