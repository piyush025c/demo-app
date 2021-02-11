import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesRepListComponent } from './sales-rep-list/sales-rep-list.component';
import { RepOfMonthComponent } from './rep-of-month/rep-of-month.component';
import { DrugOfMonthComponent } from './drug-of-month/drug-of-month.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesRepListComponent,
    RepOfMonthComponent,
    DrugOfMonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
