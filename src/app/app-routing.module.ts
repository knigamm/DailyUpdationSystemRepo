import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ViewentriesComponent } from './components/viewentries/viewentries.component';
import { ContracdashboardComponent } from './components/contracdashboard/contracdashboard.component';

const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path:"admin/:id", component: AdmindashboardComponent} ,
  {
    path:"entry/:id",component: ViewentriesComponent 
  },
  {path:"contrac/:id",component:ContracdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
