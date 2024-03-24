import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components to be used in routing
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

// Define routes
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }