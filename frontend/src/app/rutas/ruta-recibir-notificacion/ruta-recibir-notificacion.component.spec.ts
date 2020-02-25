import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRecibirNotificacionComponent } from './ruta-recibir-notificacion.component';

describe('RutaRecibirNotificacionComponent', () => {
  let component: RutaRecibirNotificacionComponent;
  let fixture: ComponentFixture<RutaRecibirNotificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRecibirNotificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRecibirNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
