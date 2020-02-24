import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarSensorComponent } from './modal-editar-sensor.component';

describe('ModalEditarSensorComponent', () => {
  let component: ModalEditarSensorComponent;
  let fixture: ComponentFixture<ModalEditarSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
