import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { config } from './config'
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { FirestoreModule } from '@angular/fire/firestore'
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    ReviewComponent,
    InfoComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    FirebaseAppModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    FirestoreModule,
    MatInputModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
