import { TestBed, inject } from '@angular/core/testing';

import { ListTableService } from './list-table.service';

describe('ListTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListTableService]
    });
  });

  it('should be created', inject([ListTableService], (service: ListTableService) => {
    expect(service).toBeTruthy();
  }));
});
