import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';

//import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(()=> initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
)
  ]
};
