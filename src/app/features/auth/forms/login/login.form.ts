import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/types/user';
import { emailValidator, whitespaceValidator } from 'src/app/util/string-validators';

@Component({
  selector: 'login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  @Output() login: EventEmitter<UserLogin> = new EventEmitter();

  @Input() logging: boolean;

  form: FormGroup;

  showFieldPassword = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.maxLength(80), whitespaceValidator, emailValidator],
      ],
      password: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.login.emit(this.form.value);
  }

  showPassword() {
    this.showFieldPassword = !this.showFieldPassword;
  }
}
