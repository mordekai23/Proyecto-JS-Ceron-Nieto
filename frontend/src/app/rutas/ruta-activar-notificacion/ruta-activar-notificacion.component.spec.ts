import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActivarNotificacionComponent } from './ruta-activar-notificacion.component';

describe('RutaActivarNotificacionComponent', () => {
  let component: RutaActivarNotificacionComponent;
  let fixture: ComponentFixture<RutaActivarNotificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActivarNotificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActivarNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
