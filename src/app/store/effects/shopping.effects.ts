import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { ShoppingListServiceService } from '../../services/shopping-list-service.service';
import { getListItems, getListItemsComplete } from '../actions/shopping.actions';
import { catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ShoppingEffects {

  getListItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListItems),
      mergeMap(action =>
        this.shoppingListService.loadShoppingList().pipe(
          map(response => {
            const key = 'shoppingListItems';
            return getListItemsComplete({ items: response[key]});
          }),
          catchError(err => {
            console.error(err);
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private shoppingListService: ShoppingListServiceService) { }

}



