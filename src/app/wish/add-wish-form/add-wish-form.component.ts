import { Component , OnInit,output,EventEmitter, Output } from '@angular/core';
import { WishItem } from '../Shared/Module/WishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit {

  @Output() addWish = new EventEmitter<WishItem>();
  constructor(){}

  ngOnInit(): void {
    
  }


  newItemText = '';

  AddItemClick(){
    //this.items.push(new WishItem(this.newItemText));
    this.addWish.emit(new WishItem(this.newItemText));
    this.newItemText = '';
}
}
