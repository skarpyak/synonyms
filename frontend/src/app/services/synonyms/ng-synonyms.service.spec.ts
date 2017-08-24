import { TestBed, inject } from '@angular/core/testing';

import { NgSynonymsService } from './ng-synonyms.service';

class MockService {
  findSynonyms(word) {
    return this;
  }
}

let mockService;

describe('NgSynonymsService', () => {
  beforeEach(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      providers: [{provide: NgSynonymsService, useValue: mockService } ]
    });
  });

  it('should be created', inject([NgSynonymsService], (service: NgSynonymsService) => {
    expect(service).toBeTruthy();
  }));
});
