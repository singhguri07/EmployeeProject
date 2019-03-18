import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Response} from'@angular/http/src/static_response';
import { Observable } from 'rxjs';
import 'rxjs/rx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ManagerpanelComponent } from './managerpanel/managerpanel.component';
import { EmployeepanelComponent } from './employeepanel/employeepanel.component';
import { DbserviceService } from './service_files/dbservice.service';
import { Http, HttpModule } from '@angular/http';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpanelComponent,
    ManagerpanelComponent,
    EmployeepanelComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
