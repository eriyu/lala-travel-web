import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ExchangeRateService } from './exchange-rate.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  @Input()
  from:string; //原始幣別

  @Input()
  to:string = 'NTD'; //欲換算幣別

  @Input()
  sourceMoney:number; //原始金額

  resultMoney:number; //計算後金額

  constructor(private exService: ExchangeRateService) { }

  ngOnInit() {
  }

  /**
   *  取得JSONExchangeRateService的幣別匯率資料來做匯率換算
   */
  calculate() {
    this.exService
      .getExchangeRate()
      .subscribe(
        (data:any[]) => {
          let rate:number = 0;
          // forEach找到符合的幣別匯率資料
          data.forEach((item)=>{
            let toRefKey = this.from + "-" + this.to;
            if(item.key === toRefKey){
              rate = item.value;
            }
          });
          this.resultMoney = this.sourceMoney * rate;
      });
  }

}
