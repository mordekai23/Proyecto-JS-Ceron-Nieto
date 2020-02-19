import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionarUsuariosComponent } from './ruta-gestionar-usuarios.component';

describe('RutaGestionarUsuariosComponent', () => {
  let component: RutaGestionarUsuariosComponent;
  let fixture: ComponentFixture<RutaGestionarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
