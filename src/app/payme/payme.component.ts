import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
declare var paypal
@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.css']
})
export class PaymeComponent implements OnInit {
  
  @ViewChild('paypal') paypalElement: ElementRef;

  product = {
    price: 20.00,
    description: 'Obtén el plan y disfruta todos sus beneficios',
    img: '../../assets/img/log.jpg'
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
  


