import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceTableComponent } from './my-service-table.component';

describe('MyServiceTableComponent', () => {
  let component: MyServiceTableComponent;
  let fixture: ComponentFixture<MyServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServiceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
