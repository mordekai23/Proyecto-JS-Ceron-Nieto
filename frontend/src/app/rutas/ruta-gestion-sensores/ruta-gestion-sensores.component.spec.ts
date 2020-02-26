import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionSensoresComponent } from './ruta-gestion-sensores.component';

describe('RutaGestionSensoresComponent', () => {
  let component: RutaGestionSensoresComponent;
  let fixture: ComponentFixture<RutaGestionSensoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionSensoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
