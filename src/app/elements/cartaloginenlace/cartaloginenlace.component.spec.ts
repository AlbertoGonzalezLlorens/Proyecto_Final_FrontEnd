import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaloginenlaceComponent } from './cartaloginenlace.component';

describe('CartaloginenlaceComponent', () => {
  let component: CartaloginenlaceComponent;
  let fixture: ComponentFixture<CartaloginenlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaloginenlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaloginenlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
