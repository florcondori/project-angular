import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirestoreService {
  items: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor( private afs: AngularFirestore) {
    this.itemsCollection = afs.collection('games');
    this.items = this.itemsCollection.valueChanges();
  }
  saveText( text ) {
    this.itemsCollection.add(text);
    console.log(text);
  }
  showAll() {
    console.log(this.items);
    return this.items;
  }
}
export interface Item { text: string; }

