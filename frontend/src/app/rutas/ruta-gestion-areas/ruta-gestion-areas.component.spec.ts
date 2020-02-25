import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionAreasComponent } from './ruta-gestion-areas.component';

describe('RutaGestionAreasComponent', () => {
  let component: RutaGestionAreasComponent;
  let fixture: ComponentFixture<RutaGestionAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
