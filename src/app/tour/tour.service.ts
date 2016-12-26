import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TourService {

  url:string = "http://localhost:3000/tours"

  constructor(private http:Http) { }

  getTourList() {
    return this.http
      .get(this.url)
      .map((res:Response) => res.json());
  }

}
