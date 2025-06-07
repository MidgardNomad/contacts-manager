import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder) {}
  //Life-Cycle Hooks
  ngOnInit(): void {
    this.initForm();
  }
  ngOnDestroy(): void {}

  //DOM
  @ViewChild('passwordInputField')
  passwordInputField: ElementRef<HTMLInputElement>;
  //Private Props

  //Private methods
  private initForm() {
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  //Comp Props
  signInForm: FormGroup;
  //Comp Methods
  togglePassword() {
    this.passwordInputField.nativeElement.type =
      this.passwordInputField.nativeElement.type === 'password'
        ? 'text'
        : 'password';
  }
  signin() {
    console.log(this.signInForm.value);
  }
}
