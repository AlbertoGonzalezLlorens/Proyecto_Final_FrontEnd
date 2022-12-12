import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaloginComponent } from './cartalogin.component';

describe('CartaloginComponent', () => {
  let component: CartaloginComponent;
  let fixture: ComponentFixture<CartaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
