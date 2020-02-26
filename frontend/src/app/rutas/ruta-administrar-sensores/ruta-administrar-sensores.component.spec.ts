import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdministrarSensoresComponent } from './ruta-administrar-sensores.component';

describe('RutaAdministrarSensoresComponent', () => {
  let component: RutaAdministrarSensoresComponent;
  let fixture: ComponentFixture<RutaAdministrarSensoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdministrarSensoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdministrarSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
