import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionEdificiosComponent } from './ruta-gestion-edificios.component';

describe('RutaGestionEdificiosComponent', () => {
  let component: RutaGestionEdificiosComponent;
  let fixture: ComponentFixture<RutaGestionEdificiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionEdificiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionEdificiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
