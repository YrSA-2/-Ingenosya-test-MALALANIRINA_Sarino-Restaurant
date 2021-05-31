import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasDetailsComponent } from './repas-details.component';

describe('RepasDetailsComponent', () => {
  let component: RepasDetailsComponent;
  let fixture: ComponentFixture<RepasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepasDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
