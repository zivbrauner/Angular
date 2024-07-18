import { Component,OnInit,Input,EventEmitter, Output } from '@angular/core';
import { WishItem } from '../Shared/Module/WishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.IsComplete,
  (item: WishItem) => item.IsComplete
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {

  @Input() filter:any;
  @Output() filterChange = new EventEmitter<any>();
  constructor(){}
  ngOnInit(): void {
    this.updateFilter('0');
  }

  slectedFilter : any = '0';

  updateFilter(value : any){
    this.filter = filters[value]
    this.filterChange.emit(this.filter);
  }

}
