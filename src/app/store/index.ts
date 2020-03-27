import {ActionReducerMap} from '@ngrx/store';
import {reducer, ShoppingState} from './reducers/shopping.reducer';
export interface ShoppingListState {
  shoppingList: ShoppingState;
}
export const reducers: ActionReducerMap<ShoppingListState> = {
  shoppingList: reducer,
};
