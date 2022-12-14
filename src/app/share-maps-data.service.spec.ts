import { TestBed } from '@angular/core/testing';

import { ShareMapsDataService } from './share-maps-data.service';

describe('ShareMapsDataService', () => {
  let service: ShareMapsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareMapsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
