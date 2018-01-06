import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../firestore.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private firestoreService: FirestoreService ) { }

  ngOnInit() {

  }

}
