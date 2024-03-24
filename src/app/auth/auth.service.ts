import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  // login method
  async login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/']);
    }, err => {
      console.log('Something went wrong');
      this.router.navigate(['/login']);
    });
  }

  async register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      console.log("Successfully logged in");
      this.router.navigate(['/login']);
    }, err => {
      console.log("Failed to register");
      this.router.navigate(['/signup']);
    });
  }

  async logout() {
    this.fireAuth.signOut().then(() => {
      this.fireAuth.signOut();
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      console.log("Failed to log out");
    })
  }

  async signUp(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/login']);
    }, err => {
      console.log("Failed to register");
      this.router.navigate(['/signup']);
    });
  }

}
