import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './auth/login/login.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HomeComponent,
    MaterialModule,
    AppRoutingModule, // Add AppRoutingModule here 

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDapaf7z8tHW9EpBLDyaBt8lpMrQNBnya0",
      authDomain: "test-app-5a641.firebaseapp.com",
      projectId: "test-app-5a641",
      storageBucket: "test-app-5a641.appspot.com",
      messagingSenderId: "991629520222",
      appId: "1:991629520222:web:4406890bc404097498f3cf",  
      measurementId: "G-K8SLH5527D"
    }),
    AngularFireAuthModule
  ],
  providers: [],
})
export class AppModule {


} 