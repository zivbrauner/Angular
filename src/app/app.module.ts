 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EventService } from '../Shared/Services/eventService';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    WishModule,
    ContactModule
  ],
  providers: [/*EventService*/HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
