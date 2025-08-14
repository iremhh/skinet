import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { SnackbarService } from '../services/snackbar.service';

export const emptyCartGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const snack = inject(SnackbarService);
  const router = inject(Router);
  
  const cart = cartService.cart();

  if (cart && cart.items.length > 0) {
    // Cart exists and has items
    return true;
  } else {
    snack.error('Your cart is empty');
    router.navigateByUrl('/cart'); // redirect to cart page
    return false;
  }
};
