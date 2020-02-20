import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionMovimientoComponent } from './ruta-gestion-movimiento.component';

describe('RutaGestionMovimientoComponent', () => {
  let component: RutaGestionMovimientoComponent;
  let fixture: ComponentFixture<RutaGestionMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
