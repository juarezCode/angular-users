import { ProductsEffects } from './products.effects';
import { CreateProductEffects } from './create-product.effects';
import { ProductEffects } from './product.effects';
import { DeleteProductEffects } from './delete-product.effects';

export const PRODUCT_EFFECTS = [
  ProductsEffects,
  CreateProductEffects,
  ProductEffects,
  DeleteProductEffects,
];
