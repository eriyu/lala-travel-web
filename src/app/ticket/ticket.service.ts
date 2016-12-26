import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketService {

  url:string = "http://localhost:3000/tickets"

  constructor(private http:Http) { }

  getTicketList() {
    return this.http
      .get(this.url)
      .map((res:Response) => res.json());
  }

}

