import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirestoreService {
  games: Observable<Game[]>;
  private gamesCollection: AngularFirestoreCollection<Game>;

  constructor( private afs: AngularFirestore) {
    this.gamesCollection = afs.collection('games');
    this.games = this.gamesCollection.valueChanges();
  }
  createGame(game: Game) {
    const id = this.afs.createId();
    this.gamesCollection.doc(id).set(game).then(function() {
      console.log('Document successfully written!');
    });
    console.log(game, id);
    return id;
  }
  /*saveText( text ) {
    this.itemsCollection.add(text);
    console.log(text);
  }
 */
  showAll() {
    // const docRef = this.afs.collection('games').doc(id);

    /*docRef.get().then(function(doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        console.log('No such document!');
      }
    }).catch(function(error) {
      console.log('Error getting document:', error);
    });
    this.afs.collection('games').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });*/
    const proyectosObservable = this.gamesCollection.snapshotChanges().map(arr => {
      console.log(arr);
      return arr.map(snap => {
        const data = snap.payload.doc.data();
        const id = snap.payload.doc.id;
        console.log(data, id);
        return {id, ...data};
      });
    });
    return proyectosObservable;
  }
}

export interface Game {
  id: number;
  key_game: string;
  num_player: number;
  date_created: string;
  text: Array<object>;
}
