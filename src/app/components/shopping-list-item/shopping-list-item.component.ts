import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingListItem } from '../../models/shopping';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shopping-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent {

  @Input() shoppingListItem: ShoppingListItem;
  @Output() checked = new EventEmitter<boolean>();
  @Output() removed = new EventEmitter();

  constructor() { }

  checkedChanged(event) {
    this.checked.emit(event.checked);
  }

  removeMe() {
    this.removed.emit();
  }

}
