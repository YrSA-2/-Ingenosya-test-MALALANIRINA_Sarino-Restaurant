import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteRepasComponent } from './vente-repas.component';

describe('VenteRepasComponent', () => {
  let component: VenteRepasComponent;
  let fixture: ComponentFixture<VenteRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
