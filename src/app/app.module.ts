import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserChartComponent } from './user-chart/user-chart.component';  // Import UserChartComponent

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent, 
    UserListComponent,   
    UserChartComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
