import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { ExchangeRateService } from './exchange-rate/exchange-rate.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
    ExchangeRateComponent
  ],
  declarations: [
    RatingComponent,
    ExchangeRateComponent
  ],
  providers:[
    ExchangeRateService
  ]
})
export class CoreModule { }
