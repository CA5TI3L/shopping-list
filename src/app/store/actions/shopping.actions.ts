import { createAction, props } from '@ngrx/store';

export const loadShoppings = createAction(
  '[Shopping] Load Shoppings'
);

export const loadShoppingsSuccess = createAction(
  '[Shopping] Load Shoppings Success',
  props<{ data: any }>()
);

export const loadShoppingsFailure = createAction(
  '[Shopping] Load Shoppings Failure',
  props<{ error: any }>()
);
