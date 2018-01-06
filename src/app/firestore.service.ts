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
    console.log(id, user, text);
    const newData = {
      user: user,
      sentece: text,
      date_created: new Date()
    };
    this.gamesCollection.doc(id).valueChanges()
    .subscribe( game => {
      this.gameDoc = game;
      console.log('subscribe', game);
      /*
      if (game && game['text']) {
        console.log(game['text']);
        const arr = game['text'];
        arr.push(newData);
        console.log(arr);
        this.actualizar(id, arr);
      }
      */
     });
  }
  actualizar (id, newInfo) {
    this.gamesCollection.doc(id).update({text: newInfo}).then( () => {
      console.log('update');
    }).catch((e) => {
      console.log('error');
    });
  }

  showAll(id): Observable<any> {
    return this.afs.collection('games', ref => ref.where('id', '==', id)).valueChanges();
  }
}
export interface Game {
  id: string;
  num_player: number;
  date_created: number;
  text?: Array<object>;
}
