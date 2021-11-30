import { TestBed } from '@angular/core/testing';

import { MySecondLibService } from './my-second-lib.service';

describe('MySecondLibService', () => {
  let service: MySecondLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySecondLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
