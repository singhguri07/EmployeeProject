import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'display',
    component:DisplayComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
