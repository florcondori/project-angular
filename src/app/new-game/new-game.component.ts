import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirestoreService} from '../firestore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  formNewGame: FormGroup;
  isCreated: boolean;
  idGame;
  constructor(private fb: FormBuilder, private firestoreService: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.isCreated = false;
    this.formNewGame = this.fb.group({
      num_player: ['',  [
        Validators.required,
      ]]
    });
  }

  createGame() {
    const id = this.firestoreService.createGame({
      id: Date.now(),
      num_player: this.formNewGame.get('num_player').value,
      date_created: Date.now(),
      text: []
    });
    this.isCreated = true;
    this.idGame = id;
    console.log(id);
    /*
    this.router.navigate(['/']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err);  // when there's an error
    });
    */
  }

}
