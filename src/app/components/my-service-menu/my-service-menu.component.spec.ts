import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceMenuComponent } from './my-service-menu.component';

describe('MyServiceMenuComponent', () => {
  let component: MyServiceMenuComponent;
  let fixture: ComponentFixture<MyServiceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
