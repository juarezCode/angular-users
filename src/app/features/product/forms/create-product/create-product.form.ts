import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewProduct } from 'src/app/types/product';
import { whitespaceValidator } from 'src/app/util/string-validators';

@Component({
  selector: 'create-product-form',
  templateUrl: './create-product.form.html',
  styleUrls: ['./create-product.form.scss'],
})
export class CreateProductForm {
  @Output() createProduct: EventEmitter<NewProduct> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(40), whitespaceValidator]],
      description: ['', [Validators.required, Validators.maxLength(80), whitespaceValidator]],
      price: ['', [Validators.required, Validators.maxLength(30), Validators.max(99_999)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.createProduct.emit(this.form.value);
  }

  back() {
    this.router.navigate(['/app/products']);
  }
}
