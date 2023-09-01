import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// AngularFire2
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule  } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, AngularFireStorageModule, ReactiveFormsModule  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})
export class AppModule { }
