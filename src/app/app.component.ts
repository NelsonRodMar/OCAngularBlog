import {Component} from '@angular/core';
import {Post} from "./models/post.model";
import {environment} from "../environments/environment";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: environment.API_KEY,
      authDomain: environment.AUTH_DOMAIN,
      databaseURL: environment.DATABASE_URL,
      projectId: environment.PROJECT_ID,
      storageBucket: environment.STORAGE_BUCKET,
      messagingSenderId: environment.MESSAGING_SENDER_ID,
      appId: environment.APP_ID
    };
    firebase.initializeApp(config);
  }
}
