import { createAction, props } from '@ngrx/store';
import { ShoppingListItem } from '../../models/shopping';

export const getListItems = createAction(
  '[Shopping] GetListItems'
);

export const getListItemsComplete = createAction(
  '[Shopping] GetListItemsComplete',
  props<{ items: ShoppingListItem[] }>()
);

export const addListItem = createAction(
  '[Shopping] AddListItem',
  props<{ item: ShoppingListItem }>()
);

export const updateListItem = createAction(
  '[Shopping] UpdateListItem',
  props<{ item: ShoppingListItem }>()
);

export const removeListItem = createAction(
  '[Shopping] RemoveListItem',
  props<{ item: ShoppingListItem }>()
);
