import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/types/user';
import { emailValidator, whitespaceValidator } from 'src/app/util/string-validators';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.form.html',
  styleUrls: ['./create-user.form.scss'],
})
export class CreateUserForm {
  @Output() newUser: EventEmitter<NewUser> = new EventEmitter();

  form: FormGroup;

  showFieldPassword = true;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      email: [
        '',
        [Validators.required, Validators.maxLength(80), whitespaceValidator, emailValidator],
      ],
      password: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.newUser.emit(this.form.value);
  }

  showPassword() {
    this.showFieldPassword = !this.showFieldPassword;
  }

  back() {}
}
