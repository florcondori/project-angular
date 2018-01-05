import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirestoreService {
  games: Observable<Game[]>;
  private gameDoc;
  textDoc;
  private gamesCollection: AngularFirestoreCollection<Game>;

  constructor(private afs: AngularFirestore) {
    this.gamesCollection = this.afs.collection('games');
    this.games = this.gamesCollection.valueChanges();
  }

  createGame(game: Game) {
    const id = this.afs.createId();
    this.gamesCollection.doc(id).set(game).then(() => {
      console.log('Document successfully written!');
    });
    console.log(game, id);
    return id;
  }

  saveText(id, user, text) {
    console.log(id, user, text);
    const data = {
      user: user,
      text: text,
      date_created: new Date()
    };
    this.gamesCollection.doc(id).valueChanges().subscribe( game => {
      /*const doc   = {'text': game['text']};
      doc['text'].push(data);
      */
      console.log(game);
      this.textDoc = game['text'];
    });
    this.gamesCollection.doc(id).update({text: [{
        user: user,
        text: text,
        date_created: new Date()
    }]});
  }

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
    });
    const proyectosObservable = this.gamesCollection.snapshotChanges().map(arr => {
      console.log(arr);
      return arr.map(snap => {
        const data = snap.payload.doc.data();
        const id = snap.payload.doc.id;
        if (id === '3oXHVp8nFQ30LXzZVejt') {
          console.log(data, id);
        }
        return {id, ...data};
      });
    });
    return proyectosObservable;
  }
  */
  }
}
export interface Game {
  id: number;
  num_player: number;
  date_created: number;
  text: Array<object>;
}
