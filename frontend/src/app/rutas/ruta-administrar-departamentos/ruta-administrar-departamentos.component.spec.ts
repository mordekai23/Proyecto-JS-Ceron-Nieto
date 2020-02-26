import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdministrarDepartamentosComponent } from './ruta-administrar-departamentos.component';

describe('RutaAdministrarDepartamentosComponent', () => {
  let component: RutaAdministrarDepartamentosComponent;
  let fixture: ComponentFixture<RutaAdministrarDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdministrarDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdministrarDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
