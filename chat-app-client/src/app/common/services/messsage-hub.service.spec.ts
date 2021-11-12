import { TestBed } from '@angular/core/testing';

import { MesssageHubService } from './messsage-hub.service';

describe('MesssageHubService', () => {
  let service: MesssageHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesssageHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
