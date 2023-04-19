import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ViewentriesComponent } from './components/viewentries/viewentries.component';
import { ContracdashboardComponent } from './components/contracdashboard/contracdashboard.component';
import { AddentryComponent } from './components/addentry/addentry.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    ViewentriesComponent,
    ContracdashboardComponent,
    AddentryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddentryComponent]
})
export class AppModule { }
