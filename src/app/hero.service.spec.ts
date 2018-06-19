import {inject, TestBed} from '@angular/core/testing';

import {HeroService} from './hero.service';
import {HttpClientModule} from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
