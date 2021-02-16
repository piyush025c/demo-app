import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesRepListComponent } from './sales-rep-list/sales-rep-list.component';
import { RepOfMonthComponent } from './rep-of-month/rep-of-month.component';
import { DrugOfMonthComponent } from './drug-of-month/drug-of-month.component';
import { CreateRepComponent } from './create-rep/create-rep.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditRepComponent } from './edit-rep/edit-rep.component';


@NgModule({
  declarations: [
    AppComponent,
    SalesRepListComponent,
    RepOfMonthComponent,
    DrugOfMonthComponent,
    CreateRepComponent,
    DashboardComponent,
    EditRepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
