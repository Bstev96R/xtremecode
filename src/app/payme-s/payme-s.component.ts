import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
declare var paypal;
@Component({
  selector: 'app-payme-s',
  templateUrl: './payme-s.component.html',
  styleUrls: ['./payme-s.component.css']
})
export class PaymeSComponent implements OnInit {

  @ViewChild('paypal' ) paypalElement: ElementRef;

  product = {
    price: 20.00,
    description: 'Obten el plan y disfruta todos sus beneficios',
    img: '../../assets/img/razas/holstein.jpg'
  };
  paidFor=false;
  constructor() { }

  ngOnInit() {

    paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.product.description,
              amount: {
                currency_code: 'USD',
                value: this.product.price
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    })
    .render(this.paypalElement.nativeElement);

  }

}
