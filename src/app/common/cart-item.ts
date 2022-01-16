import { Product } from './product';

export class CartItem {
  /// only hold essential fields for product along with quantity
  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quanity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.quanity = 1;
  }
}
