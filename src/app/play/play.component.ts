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
  poem = [];
  formPlay: FormGroup;
  items;
  constructor(private fb: FormBuilder, private firestoreService: FirestoreService, private router: ActivatedRoute) {
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
    console.log('guardando texto');
    this.firestoreService.saveText(
      this.formPlay.get('key').value,
      this.formPlay.get('user').value,
      this.formPlay.get('text').value
    );
  }

  showAll(e) {
    console.log('ver todo');
    console.log(this.poem.join('/'));
    this.items = this.firestoreService.showAll();
  }
}
