import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tourList:any[] = [];

  constructor(private tourService:TourService) { }

  ngOnInit() {
    this.tourService
      .getTourList()
      .subscribe((data) => {
        this.tourList = data;
      });
  }

}
