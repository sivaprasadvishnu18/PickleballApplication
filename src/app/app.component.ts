import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MaterialModule } from './material/material.module';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [ RouterOutlet,
      HomeComponent,
      MyProfileComponent,
      TopNavigationComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
