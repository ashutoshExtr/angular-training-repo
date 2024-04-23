import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ButtonModule } from 'primeng/button';
// import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
// import { ColorPickerModule } from 'primeng/colorpicker';
// import { SidebarModule } from 'primeng/sidebar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ButtonModule,
    // CalendarModule,
    FormsModule,
    // ColorPickerModule,
    // SidebarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
