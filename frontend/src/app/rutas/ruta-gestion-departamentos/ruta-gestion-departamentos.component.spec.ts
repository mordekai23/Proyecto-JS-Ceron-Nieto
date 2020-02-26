import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionDepartamentosComponent } from './ruta-gestion-departamentos.component';

describe('RutaAdministrarDepartamentosComponent', () => {
  let component: RutaGestionDepartamentosComponent;
  let fixture: ComponentFixture<RutaGestionDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
