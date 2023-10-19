import { TestBed } from '@angular/core/testing';

import { DbzCharactersService } from './dbz-characters.service';

describe('DbzCharactersService', () => {
  let service: DbzCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
