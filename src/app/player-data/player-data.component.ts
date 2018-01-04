import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {
  formPlayerData: FormGroup;
  constructor( private fb: FormBuilder, private router: Router) { }

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
  start() {
    this.router.navigate(['/play', this.formPlayerData.get('key').value, this.formPlayerData.get('user').value]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err);  // when there's an error
    });
  }

}
