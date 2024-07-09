import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WishItem } from './wish/Shared/Module/WishItem';
import  { EventService } from './wish/Shared/Services/eventService';
import { WishService } from './wish/wish.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(){}
  
  ngOnInit(): void {
    
  }



}
