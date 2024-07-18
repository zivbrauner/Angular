import { Component , OnInit,output,EventEmitter, Output } from '@angular/core';
import { WishItem } from '../Shared/Module/WishItem';
import { EventService } from '../Shared/Services/eventService';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit {

  @Output() addWish = new EventEmitter<WishItem>();
  constructor(private events: EventService){}

  ngOnInit(): void {
    
  }


  newItemText = '';

  AddItemClick(){
    //this.items.push(new WishItem(this.newItemText));
    var newWishItem = new WishItem(this.newItemText);
    this.addWish.emit(newWishItem);
    this.events.emit('addWish',newWishItem);
    this.newItemText = '';
}
}
