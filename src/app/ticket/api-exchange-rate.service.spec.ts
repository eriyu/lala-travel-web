/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { APIExchangeRateService } from './api-exchange-rate.service';

describe('ApiExchangeRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIExchangeRateService]
    });
  });

  it('should ...', inject([APIExchangeRateService], (service: APIExchangeRateService) => {
    expect(service).toBeTruthy();
  }));
});
