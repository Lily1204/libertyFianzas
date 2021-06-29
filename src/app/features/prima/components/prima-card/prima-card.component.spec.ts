import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaCardComponent } from './prima-card.component';

describe('PrimaCardComponent', () => {
  let component: PrimaCardComponent;
  let fixture: ComponentFixture<PrimaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
