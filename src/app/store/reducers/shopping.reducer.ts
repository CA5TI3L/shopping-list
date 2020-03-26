import { Action, createReducer, on } from '@ngrx/store';


export const shoppingFeatureKey = 'shopping';

export interface State {

}

export const initialState: State = {

};

const shoppingReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return shoppingReducer(state, action);
}
