import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionSensorAreaComponent } from './ruta-gestion-sensor-area.component';

describe('RutaGestionSensorAreaComponent', () => {
  let component: RutaGestionSensorAreaComponent;
  let fixture: ComponentFixture<RutaGestionSensorAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionSensorAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionSensorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
