import { Component, OnInit,output,Input,EventEmitter, Output  } from '@angular/core';
import { WishItem } from '../Shared/Module/WishItem';
import { EventService } from '../Shared/Services/eventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {

  constructor(private events: EventService){}
  ngOnInit(): void {
    
  }
  @Input() wish! : WishItem;
  //@Input() fullfilled! : boolean;
  //@Output() fullfilledChange = new EventEmitter<boolean>();

  toggleFullfielld(){
    this.wish.IsComplete = !this.wish.IsComplete;
    this.events.emit('updateWish',this.wish);
  }

  removeWish()
  {
    this.events.emit('removeWish',this.wish);
  }

  get cssClasses(){
    // return this.fullfilled ?['strikeOut','text-muted'] :[];
      return {'strikeOut text-muted':this.wish.IsComplete };
  }

}
