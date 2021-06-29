import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaListComponent } from './prima-list.component';

describe('PrimaListComponent', () => {
  let component: PrimaListComponent;
  let fixture: ComponentFixture<PrimaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
