import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Son1Component } from './son1/son1.component';
import { Son2Component } from './son2/son2.component';
import { Son3Component } from './son3/son3.component';
import { Son4Component } from './son4/son4.component';
import { SubscribeService } from './service/subscribe.service';



@NgModule({
  declarations: [
    AppComponent,
    Son1Component,
    Son2Component,
    Son3Component,
    Son4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
