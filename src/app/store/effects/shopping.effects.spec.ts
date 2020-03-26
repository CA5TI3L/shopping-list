import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ShoppingEffects } from './shopping.effects';

describe('ShoppingEffects', () => {
  let actions$: Observable<any>;
  let effects: ShoppingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShoppingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ShoppingEffects>(ShoppingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
