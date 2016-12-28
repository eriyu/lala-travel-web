import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ExchangeRateService {

  constructor(private http:Http) { }

  getExchangeRate(){
    return this.http
      .get("api/exchange-rate.json")
      .map((res:Response) => res.json());
  }

}
