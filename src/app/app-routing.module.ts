import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { LoginComponent } from './Login/login.component';
import { AuthServices } from './Services/auth.services';

const routes: Routes = [
  { path: 'dashboard', component: DashBoardComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  //{ path: 'Logout', component: LoginComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
