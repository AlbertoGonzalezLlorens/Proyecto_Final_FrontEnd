import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaReservaComponent } from './ficha-reserva.component';

describe('FichaReservaComponent', () => {
  let component: FichaReservaComponent;
  let fixture: ComponentFixture<FichaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
