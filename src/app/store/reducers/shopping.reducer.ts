import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingListItem } from 'src/app/models/shopping';
import { getListItems, getListItemsComplete, addListItem, updateListItem, removeListItem } from '../actions/shopping.actions';
import { Action } from '@ngrx/store';

export const shoppingFeatureKey = 'shopping';

export interface ShoppingState {
  isLoading: boolean;
  shoppingListItems: ShoppingListItem[];
}

export const initialState: ShoppingState = {
  isLoading: false,
  shoppingListItems: []
};

const shoppingReducer = createReducer(
  initialState,
  on(getListItems, state => ({ ...state, isLoading: true })),
  on(getListItemsComplete, (state, { items }) => ({
    ...state,
    isLoading: false,
    shoppingListItems: [...items, ...state.shoppingListItems]
  })),
  on(addListItem, (state, { item }) => ({
    ...state,
    shoppingListItems: [...state.shoppingListItems, item]
  })),
  on(updateListItem, (state, { item }) => {
    const tempList = state.shoppingListItems.map(listItem => listItem.id === item.id ? item : listItem);
    return {
      ...state,
      shoppingListItems: [...tempList]
    };
  }),
  on(removeListItem, (state, { item }) => {
    const tempList = state.shoppingListItems.filter(listItem => listItem.id !== item.id);
    return {
      ...state,
      shoppingListItems: [...tempList]
    };
  })
);

export function reducer(state: ShoppingState | undefined, action: Action) {
  return shoppingReducer(state, action);
}

export const selectFeature = createFeatureSelector<any, ShoppingState>('shoppingList');

export const selectIsLoading = createSelector(
  selectFeature,
  (state: ShoppingState) => state.isLoading);

export const selectListItems = createSelector(
  selectFeature,
  (state: ShoppingState) => state.shoppingListItems);
