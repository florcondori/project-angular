import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  poem = [];
  formPlay: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.formPlay = this.fb.group({
      text: ['',  [
        Validators.required,
        Validators.minLength(4)
      ]]
    });
  }

  saveText() {
    console.log('guardando texto');
    console.log(this.formPlay.get('text').value);
    this.poem.push(this.formPlay.get('text').value);
  }

  showAll(e) {
    console.log('ver todo');
    console.log(this.poem.join('/'));
  }
}
