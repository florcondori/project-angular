import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {
  formPlayerData: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.formPlayerData = this.fb.group({
      user: ['',  [
        Validators.required,
        Validators.minLength(3),
      ]],
      key: ['',  [
        Validators.required,
        Validators.minLength(4),
      ]]
    });
  }

}
