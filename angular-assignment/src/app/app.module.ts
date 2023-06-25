import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { FormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './view-details/view-details.component';
@NgModule({
  declarations: [
    AppComponent,
    RecordDetailsComponent,
    ViewDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
