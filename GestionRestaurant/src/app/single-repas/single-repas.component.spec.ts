import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRepasComponent } from './single-repas.component';

describe('SingleRepasComponent', () => {
  let component: SingleRepasComponent;
  let fixture: ComponentFixture<SingleRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
