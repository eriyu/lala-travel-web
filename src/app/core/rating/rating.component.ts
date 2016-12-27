import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  fullIcon = '★';

  @Input()
  emptyIcon = '☆';

  @Input()
  set max(max: number) {
      this._max = max;
      this.buildRanges();
  }

  get max() {
      return this._max;
  }

  @Input()
  rating: number;

  ratingRange: number[];

  private _max: number = 5;

  constructor() { }

  ngOnInit() {
  }

  private buildRanges() {
    this.ratingRange = this.range(1, this.max);
  }

  private range(start: number, end: number) {
      const foo: number[] = [];
      for (let i = start; i <= end; i++) {
          foo.push(i);
      }
      return foo;
  }

}
