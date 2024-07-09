import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishService } from './wish.service';
import { WishComponent } from './wish.component';



@NgModule({
  declarations: [
    WishListComponent,
    WishListItemComponent,
    AddWishFormComponent,
    WishFilterComponent,
    
    WishComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [/*EventService*/HttpClient],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
