import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdministrarPisosComponent } from './ruta-administrar-pisos.component';

describe('RutaAdministrarPisosComponent', () => {
  let component: RutaAdministrarPisosComponent;
  let fixture: ComponentFixture<RutaAdministrarPisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdministrarPisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdministrarPisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
