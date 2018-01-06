import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirestoreService {
  games;
  gameDoc;
  private gamesCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.gamesCollection = this.afs.collection('games');
    this.games = this.gamesCollection.valueChanges();
  }

  createGame(game) {
    const id = this.afs.createId();
    this.gamesCollection.doc(id).set({
      id: id,
      num_player: game.num_player,
      date_created: Date.now(),
      text: []
    }).then(() => {
      console.log('creado');
    });
    return id;
  }

  saveText(id, user, text) {
    const newData = {
      user: user,
      sentece: text,
      date_created: new Date()
    };
    this.gamesCollection.doc(id).collection('text').add(newData).then( () => console.log('add text'));
  }


  showAll(id) {
    return this.gamesCollection.doc(id).collection('text').valueChanges();
  }
  getNumPlayer (id) {
    return this.gamesCollection.doc(id).valueChanges();
  }
}
export interface Game {
  id: string;
  num_player: number;
  date_created: number;
  text?: Array<object>;
}
