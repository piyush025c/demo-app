import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepListComponent } from './sales-rep-list.component';

describe('SalesRepListComponent', () => {
  let component: SalesRepListComponent;
  let fixture: ComponentFixture<SalesRepListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRepListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
