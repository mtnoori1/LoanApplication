import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { LoginComponent } from './Login/login.component';
import { LoginService } from './Login/login.services';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  



@NgModule({
  declarations: [
    AppComponent,DashBoardComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
