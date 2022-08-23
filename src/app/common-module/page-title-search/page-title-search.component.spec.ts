import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleSearchComponent } from './page-title-search.component';

describe('PageTitleSearchComponent', () => {
  let component: PageTitleSearchComponent;
  let fixture: ComponentFixture<PageTitleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTitleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
