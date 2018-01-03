import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import {FirestoreService} from '../firestore.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  poem = [];
  formPlay: FormGroup;
  items;
  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {
  }
  ngOnInit() {
    this.formPlay = this.fb.group({
      text: ['',  [
        Validators.required,
        Validators.minLength(4)
      ]]
    });
  }
  /*
  saveText() {
    console.log('guardando texto');
    // console.log(this.formPlay.get('text').value);
    this.poem.push(this.formPlay.get('text').value);
    this.firestoreService.saveText({text: this.formPlay.get('text').value});
  }
*/
  showAll(e) {
    console.log('ver todo');
    console.log(this.poem.join('/'));
    this.items = this.firestoreService.showAll();
  }
}
