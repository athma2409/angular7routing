import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { HomeComponent} from "./home/home.component";
import { LogoutComponent } from "./logout/logout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
{
  path:"logout",
  component:LogoutComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"home",
  component:HomeComponent
},
{
  path:"",
  redirectTo:"/home",
  pathMatch:"full"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
