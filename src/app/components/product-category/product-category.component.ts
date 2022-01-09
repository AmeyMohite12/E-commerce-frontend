import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  constructor(private productService: ProductService) {}

  productCategories: ProductCategory[];
  ngOnInit(): void {
    this.listProductCategories();
  }
  listProductCategories() {
    this.productService.getProductCategoryList().subscribe((data) => {
      console.log('Product categories :- ' + JSON.stringify(data));
      this.productCategories = data;
    });
  }
}
