import { Component, OnInit,Input } from '@angular/core';
import { WishItem } from '../Shared/Module/WishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {

  @Input() items : WishItem[] = [];
  constructor(){}
  ngOnInit(): void {
    
  }

  
}
