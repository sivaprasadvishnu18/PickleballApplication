import { Component } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { Router } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { HomeComponent } from '../home/home.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [
    MaterialModule,
    LoginComponent,
    HomeComponent,
    MyProfileComponent
  ],
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.css'
})
export class TopNavigationComponent {

  constructor(
    private router: Router
  ) { }

    public navigateToHome(): void {
      console.log("Clicked in here");
      this.router.navigate(['']);
    }

}
