 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish/wish-list/wish-list.component';
import { AddWishFormComponent } from './wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish/wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish/wish-list-item/wish-list-item.component';
//import { EventService } from '../Shared/Services/eventService';
import { WishModule } from './wish/wish.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    WishModule
  ],
  providers: [/*EventService*/HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
