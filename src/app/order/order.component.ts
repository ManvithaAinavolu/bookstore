import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  order = {
    name: '',
    phone: '',
    address: '',
    country: '',
    pincode: '',
    items: 0,
    totalPrice: ''
  };

  submitOrder() {
    // Implement your order submission logic here
    console.log('Order submitted:', this.order);
    // Redirect to payment gateway or process payment here
  }
}
