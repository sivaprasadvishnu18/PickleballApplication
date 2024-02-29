import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [ RouterOutlet,
      HomeComponent,
      MyProfileComponent,
      AppRoutingModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
