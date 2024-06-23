import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
        id: 2,
      },
    ],
  };

  dataSource: Array<CartItem> = [];

  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "actions",
  ];

  constructor(private cartServices: CartService) {}

  ngOnInit(): void {
    this.cartServices.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartServices.getTotal(items);
  }

  onClearCart(): void {
    this.cartServices.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartServices.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartServices.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartServices.removeQuantity(item);
  }
}
