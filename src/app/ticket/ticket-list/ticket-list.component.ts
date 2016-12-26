import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ticketList:any[] = [];

  constructor(private ticketService:TicketService) { }

  ngOnInit() {
    this.ticketService
      .getTicketList()
      .subscribe((data) => {
        this.ticketList = data;
      });
  }

}
