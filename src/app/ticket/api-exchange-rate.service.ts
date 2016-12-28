import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class APIExchangeRateService {

  url:string = "http://localhost:3000/rates"

  constructor(private http:Http) { }

  getExchangeRate(){
    var today = new Date().toISOString().slice(0, 10);
    let queryUrl = this.url + "/" + today;
    return this.http
      .get(queryUrl)
      .map((res:Response) => res.json());
  }

}
