import { TestBed, inject } from '@angular/core/testing';

import { SendmsgService } from './sendmsg.service';

describe('SendmsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendmsgService]
    });
  });

  it('should be created', inject([SendmsgService], (service: SendmsgService) => {
    expect(service).toBeTruthy();
  }));
});
