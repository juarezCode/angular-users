import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserUpdate } from 'src/app/types/user';
import { emailValidator, whitespaceValidator } from 'src/app/util/string-validators';

@Component({
  selector: 'update-user-form',
  templateUrl: './update-user.form.html',
  styleUrls: ['./update-user.form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserForm {
  @Input() user: User;

  @Output() update: EventEmitter<UserUpdate> = new EventEmitter();

  form: FormGroup;

  showFieldPassword = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      name: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      lastName: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      age: ['', [Validators.required, Validators.maxLength(80), Validators.max(150)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.update.emit(this.form.value);
  }

  showPassword() {
    this.showFieldPassword = !this.showFieldPassword;
  }

  back() {
    this.router.navigate(['/app/users']);
  }
}
