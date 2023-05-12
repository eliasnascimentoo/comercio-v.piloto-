import { TestBed } from '@angular/core/testing';

import { MateriaisService } from './materiais.service';

describe('MateriaisService', () => {
  let service: MateriaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
