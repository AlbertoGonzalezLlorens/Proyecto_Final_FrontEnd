import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuarioFotoComponent } from './formulario-usuario-foto.component';

describe('FormularioUsuarioFotoComponent', () => {
  let component: FormularioUsuarioFotoComponent;
  let fixture: ComponentFixture<FormularioUsuarioFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUsuarioFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioUsuarioFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
