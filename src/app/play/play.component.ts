import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import {FirestoreService} from '../firestore.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  formPlay: FormGroup;
  id;
  items= [];
  num_player;
  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {
  }
  ngOnInit() {
    this.formPlay = this.fb.group({
      text: ['',  [
        Validators.required,
        Validators.minLength(4)
      ]],
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
  saveText() {
    this.id = this.formPlay.get('key').value;
    console.log('guardando texto');
    this.firestoreService.saveText(
      this.id,
      this.formPlay.get('user').value,
      this.formPlay.get('text').value
    );
  }
  showAll() {
    console.log('ver todo');
    this.firestoreService.showAll( this.formPlay.get('key').value).subscribe((arrText) => {
      arrText.forEach( text => {
        console.log(text['sentece']);
        this.items.push(text['sentece']);
        console.log(this.items);
      });
    });

  }
}
