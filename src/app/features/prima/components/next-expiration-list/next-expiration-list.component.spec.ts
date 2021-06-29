import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextExpirationListComponent } from './next-expiration-list.component';

describe('NextExpirationListComponent', () => {
  let component: NextExpirationListComponent;
  let fixture: ComponentFixture<NextExpirationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextExpirationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextExpirationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
