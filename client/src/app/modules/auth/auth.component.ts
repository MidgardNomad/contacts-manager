import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  //Life-Cycle Hooks
  ngOnInit(): void {
    this.initForm();
  }
  ngAfterViewInit(): void {
    this.usernameInputField.nativeElement.focus();
  }
  ngOnDestroy(): void {
    this.loginAPISub?.unsubscribe();
  }

  //DOM
  @ViewChild('passwordInputField')
  passwordInputField: ElementRef<HTMLInputElement>;
  @ViewChild('usernameInputField')
  usernameInputField: ElementRef<HTMLInputElement>;
  @ViewChild('togglePasswordButton')
  togglePasswordButton: ElementRef<HTMLButtonElement>;
  //Private Props
  //SUBS
  private loginAPISub: Subscription;

  //Private methods
  private initForm() {
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }
  private loginAction(action: 'enable' | 'disable') {
    switch (action) {
      case 'disable':
        this.signingIn = true;
        this.signInForm.get('username').disable();
        this.signInForm.get('password').disable();
        this.togglePasswordButton.nativeElement.disabled = true;
        break;
      case 'enable':
        this.signingIn = false;
        this.signInForm.get('username').enable();
        this.signInForm.get('password').enable();
        this.togglePasswordButton.nativeElement.disabled = false;
        break;
    }
  }
  //Comp Props
  signInForm: FormGroup;
  signingIn = false;
  //Comp Methods
  togglePassword() {
    this.passwordInputField.nativeElement.type =
      this.passwordInputField.nativeElement.type === 'password'
        ? 'text'
        : 'password';
  }
  signin() {
    this.loginAction('disable');
    const { username, password } = this.signInForm.value;
    const correctCred =
      (username === 'user1' && password === 'user1') ||
      (username === 'user2' && password === 'user2');
    if (correctCred) {
      this.loginAPISub = this.authService
        .login({ username, password })
        .subscribe({
          next: (res) => {
            localStorage.setItem('token', res.data.token);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.log(error);
            this.loginAction('enable');
          },
        });
    } else {
      console.log(`Throw errors`);
    }
  }
}
