import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRepasComponent } from './insert-repas.component';

describe('InsertRepasComponent', () => {
  let component: InsertRepasComponent;
  let fixture: ComponentFixture<InsertRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
