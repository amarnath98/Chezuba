import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from './services/my-service.service';
import { ChezubaComponent } from './chezuba/chezuba.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import {​ NgxSpinnerModule }​ from 'ngx-spinner';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxSpinnerModule],
  declarations: [AppComponent, HelloComponent, ChezubaComponent],
  bootstrap: [AppComponent],
  providers: [MyServiceService]
})
export class AppModule {}
