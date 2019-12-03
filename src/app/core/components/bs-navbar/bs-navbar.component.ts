import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from "@angular/core";
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.scss"]
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>

  constructor(public auth: AuthService, private shoppingCartService: ShoppingCartService) {}

 async ngOnInit() {
    this.auth.appUser$.subscribe(appUser =>{
      this.appUser = appUser;
    })

   this.cart$ = (await this.shoppingCartService.getCart());
  }

  logout() {
    this.auth.logut(); 
  }
}
