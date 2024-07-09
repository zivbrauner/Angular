import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WishItem } from './Shared/Module/WishItem';
import  { EventService } from './Shared/Services/eventService';
import { WishService } from './wish.service';



@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit{
  items : WishItem[] = [];

  constructor(events: EventService, private wishService: WishService){
    events.listen('removeWish',(item:any)=>{
      let index = this.items.indexOf(item);
      this.items.splice(index,1);
      console.log(item);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    },
    (error: any)=>{
      alert(error.message);
    }
  );
  }

  filter : any;

}
