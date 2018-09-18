import { TestBed, inject } from '@angular/core/testing';

import { SayService } from './say.service';

describe('SayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SayService]
    });
  });

  it('should be created', inject([SayService], (service: SayService) => {
    expect(service).toBeTruthy();
  }));
});
