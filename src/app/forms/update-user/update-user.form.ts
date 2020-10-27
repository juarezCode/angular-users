import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator, whitespaceValidator } from 'src/app/util/string-validators';

@Component({
  selector: 'update-user-form',
  templateUrl: './update-user.form.html',
  styleUrls: ['./update-user.form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserForm {
  @Output() update = new EventEmitter();

  form: FormGroup;

  showFieldPassword = true;

  userId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      email: [
        '',
        [Validators.required, Validators.maxLength(80), whitespaceValidator, emailValidator],
      ],
    });
    this.userId = +this.route.snapshot.paramMap.get('userId');
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.update.emit({ user: this.form.value, userId: this.userId });
  }

  showPassword() {
    this.showFieldPassword = !this.showFieldPassword;
  }

  back() {
    this.router.navigate(['/app']);
  }
}
