import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ViewentriesComponent } from './components/viewentries/viewentries.component';

const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path:"admin/:id", component: AdmindashboardComponent },{
    path:"entry/:id",component: ViewentriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
