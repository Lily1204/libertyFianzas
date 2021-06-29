import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaPagesComponent } from './prima-pages.component';

describe('PrimaPagesComponent', () => {
  let component: PrimaPagesComponent;
  let fixture: ComponentFixture<PrimaPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
