import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {

  constructor(private http: HttpClient) { }

  loadShoppingList() {
    const jsonFile = 'assets/data/shopping-list.json';
    return this.http.get(jsonFile);
  }

}
