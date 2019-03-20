import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  form;
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup(
      {
        userid:new FormControl("")
      }
    );
  }
  onSubmit(myform)
  {

  }
}
