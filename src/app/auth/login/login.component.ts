import { Component } from '@angular/core';
import { MaterialModule } from './../../material/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

/*  myForm: FormGroup = this.fb.group({
    username: ['', Validators.email],
    password: ['', Validators.required]
  });
  public loginInvalid: boolean | undefined;
  private formSubmitAttempt: boolean | undefined;
  private returnUrl: string | undefined;

  email: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }


  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.myForm.valid) {
      try {
        let username: string = this.myForm.get('username')?.value;
        let password: string = this.myForm.get('password')?.value;
        await this.authService.login(username, password); 
      } catch {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }*/
}
