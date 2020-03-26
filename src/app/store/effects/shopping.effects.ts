import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { ShoppingListServiceService } from '../../services/shopping-list-service.service'
import { getListItemsComplete } from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {

  constructor(private actions$: Actions, private shoppingListService: ShoppingListServiceService) { }

//   getListItems$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getListItems),
//       mergeMap(action =>
//         this.shoppingListService.loadShoppingList().pipe(
//           map(response => {
//             return getListItemsComplete({ items: response['shoppingListItems'] });
//           }),
//           cathError(err => {
//             console.error(err);
//             return EMPTY;
//           })
//         )
//       )
//     )
//   )
// };
}
