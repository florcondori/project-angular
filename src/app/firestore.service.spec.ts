import { TestBed, inject } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import {AngularFirestore} from 'angularfire2/firestore';

describe('FirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreService]
    });
  });

  it('should be created', inject([FirestoreService], (service: FirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
