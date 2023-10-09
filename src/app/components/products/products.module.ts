import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from 'src/app/components/products/add-products/add-products.component';
import { DetailProductsComponent } from 'src/app/components/products/detail-products/detail-products.component';
import { ListProductsComponent } from 'src/app/components/products/list-products/list-products.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddProductsComponent,
    DetailProductsComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"add",component:AddProductsComponent},
      {path:":id",component:DetailProductsComponent},
      {path:"", component:ListProductsComponent},
    ])
  ]
})
export class ProductsModule { }
