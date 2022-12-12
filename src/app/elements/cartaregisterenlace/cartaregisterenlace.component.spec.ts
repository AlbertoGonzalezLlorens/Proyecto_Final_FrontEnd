import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaregisterenlaceComponent } from './cartaregisterenlace.component';

describe('CartaregisterenlaceComponent', () => {
  let component: CartaregisterenlaceComponent;
  let fixture: ComponentFixture<CartaregisterenlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaregisterenlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaregisterenlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
