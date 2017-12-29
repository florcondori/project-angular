import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  formNewGame: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formNewGame = this.fb.group({
      num_player: ['',  [
        Validators.required,
      ]],
      key: ['',  [
        Validators.required,
        Validators.minLength(4),
      ]]
    });
  }

}
