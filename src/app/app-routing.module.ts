import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components to be used in routing
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

// Define routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-profile', component: MyProfileComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }