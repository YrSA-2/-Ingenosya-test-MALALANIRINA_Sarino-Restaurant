import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCouvertComponent } from './insert-couvert.component';

describe('InsertCouvertComponent', () => {
  let component: InsertCouvertComponent;
  let fixture: ComponentFixture<InsertCouvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCouvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCouvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
