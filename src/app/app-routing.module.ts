import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomStrategy } from './strategies/custom.strategy';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"customers",loadChildren: () => import("./components/customers/customers.module").then(m=> m.CustomersModule), data :{preload:true}},
  {path:"products",loadChildren: () => import("./components/products/products.module").then(m=> m.ProductsModule),data: {preload:false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Preloading strategy sayesinde lazyloading ile istenmeyen sayfa kaynakları yüklenmemesine rağmen sayga açıldığında yüklenmesini istediklerimizi belirttik. 