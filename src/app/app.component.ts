import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingListItem } from './models/shopping';
import { ShoppingState, selectListItems } from './store/reducers/shopping.reducer';
import { Store, select } from '@ngrx/store';
import { updateListItem, removeListItem, addListItem, getListItems } from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newItemName = '';
  newItemId = 0;
  shoppingListItems$: Observable<ShoppingListItem[]>;

  constructor(private shoppingListStore: Store<ShoppingState>) { }
  ngOnInit(): void {
    this.shoppingListItems$ = this.shoppingListStore.pipe(
      select(selectListItems)
    );
    this.shoppingListStore.dispatch(getListItems());
  }

  onCheckChanged(event: boolean, eventItem: ShoppingListItem) {
    // item.completed = event;
    this.shoppingListStore.dispatch(updateListItem({ item: { ...eventItem, completed: event } }));
  }

  onRemoved(item: ShoppingListItem) {
    this.shoppingListStore.dispatch(removeListItem({ item }));
  }

  addNewItem() {
    this.shoppingListStore.dispatch(addListItem({ item: { id: this.newItemId, label: this.newItemName, completed: false } }));
    this.newItemName = '';
    this.newItemId = 0;
  }

}
