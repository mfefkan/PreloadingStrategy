import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
  <a routerLink="">Home</a> | <a routerLink="products">Products</a> |<a routerLink="customers">Customers</a> <br>
  
  <router-outlet></router-outlet>
  
  `
  ,
})
export class AppComponent {
  title = 'PreloadingStrategy';
}
