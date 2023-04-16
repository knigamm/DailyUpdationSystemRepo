import { TestBed } from '@angular/core/testing';

import { ServerinfoService } from './serverinfo.service';

describe('ServerinfoService', () => {
  let service: ServerinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
