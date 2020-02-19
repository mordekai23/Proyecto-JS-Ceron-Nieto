import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSensorAreaUsuarioComponent } from './ruta-sensor-area-usuario.component';

describe('RutaSensorAreaUsuarioComponent', () => {
  let component: RutaSensorAreaUsuarioComponent;
  let fixture: ComponentFixture<RutaSensorAreaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSensorAreaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSensorAreaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
