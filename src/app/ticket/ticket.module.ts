import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from './ticket.service';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { Router, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ExchangeRateService } from '../core/exchange-rate/exchange-rate.service';
import { APIExchangeRateService } from './api-exchange-rate.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      { path: 'ticket-list', component: TicketListComponent }
    ])
  ],
  declarations: [TicketListComponent],
  exports:[TicketListComponent],
  providers:[
    TicketService,
    {
      provide:ExchangeRateService,useClass: APIExchangeRateService
    }
  ]
})
export class TicketModule { }
