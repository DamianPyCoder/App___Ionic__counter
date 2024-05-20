import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardCouponPage } from './card-coupon.page';

const routes: Routes = [
  {
    path: '',
    component: CardCouponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardCouponPageRoutingModule {}
