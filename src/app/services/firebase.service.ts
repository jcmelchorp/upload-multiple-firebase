import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {

  tests: Observable<any[]>;

  constructor( private afs: AngularFirestore ) { }

  getTests() {
    this.tests = this.afs.collection('test').valueChanges();
    return this.tests;
  }

}