import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product, ProductUpdate } from 'src/app/types/product';
import { whitespaceValidator } from 'src/app/util/string-validators';

@Component({
  selector: 'update-product-form',
  templateUrl: './update-product.form.html',
  styleUrls: ['./update-product.form.scss'],
})
export class UpdateProductForm {
  @Input() product: Product;

  @Output() update = new EventEmitter<ProductUpdate>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      description: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      price: ['', [Validators.required, Validators.maxLength(80), Validators.max(99_999)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.update.emit(this.form.value);
  }

  back() {
    this.router.navigate(['/app/products']);
  }
}
