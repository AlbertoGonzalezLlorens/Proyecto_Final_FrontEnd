import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhotelsComponent } from './cardhotels.component';

describe('CardhotelsComponent', () => {
  let component: CardhotelsComponent;
  let fixture: ComponentFixture<CardhotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardhotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
