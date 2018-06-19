import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService
      ],
      imports: [
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
