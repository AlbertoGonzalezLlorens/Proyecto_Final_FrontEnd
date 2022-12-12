import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaregisterComponent } from './cartaregister.component';

describe('CartaregisterComponent', () => {
  let component: CartaregisterComponent;
  let fixture: ComponentFixture<CartaregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
