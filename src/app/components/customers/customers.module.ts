import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddCustomersComponent } from 'src/app/components/customers/add-customers/add-customers.component';
import { DetailCustomersComponent } from 'src/app/components/customers/detail-customers/detail-customers.component';
import { ListCustomersComponent } from 'src/app/components/customers/list-customers/list-customers.component';



@NgModule({
  declarations: [
    AddCustomersComponent,
    ListCustomersComponent,
    DetailCustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"add",component:AddCustomersComponent},
      {path:":id",component:DetailCustomersComponent},
      {path:"",component:ListCustomersComponent}
  ])

  ]

})
export class CustomersModule { }
