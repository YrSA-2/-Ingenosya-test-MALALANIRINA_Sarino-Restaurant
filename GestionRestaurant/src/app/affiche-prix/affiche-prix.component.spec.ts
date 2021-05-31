import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePrixComponent } from './affiche-prix.component';

describe('AffichePrixComponent', () => {
  let component: AffichePrixComponent;
  let fixture: ComponentFixture<AffichePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichePrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
