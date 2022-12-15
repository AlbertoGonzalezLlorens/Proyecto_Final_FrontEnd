import { TestBed } from '@angular/core/testing';

import { ModifyuserService } from './modifyuser.service';

describe('ModifyuserService', () => {
  let service: ModifyuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
