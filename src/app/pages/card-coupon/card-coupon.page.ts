import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-card-coupon',
  templateUrl: './card-coupon.page.html',
  styleUrls: ['./card-coupon.page.scss'],
})
export class CardCouponPage implements OnInit {

  public QRCode: string;

  constructor(
    private navParams: NavParams
  ) {
  }

  ngOnInit() {
    // Genero el QRCode
    this.QRCode = JSON.stringify(this.navParams.data['coupons']);
  }

}
