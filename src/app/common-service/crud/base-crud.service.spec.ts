import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaseCrudService } from './base-crud.service';

describe('BaseCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseCrudService,
      ],
      
    });
  });

  it('should be created', inject([BaseCrudService], (service: BaseCrudService) => {
    expect(service).toBeTruthy();
  }));
});
