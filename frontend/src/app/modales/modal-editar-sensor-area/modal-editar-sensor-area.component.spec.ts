import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarSensorAreaComponent } from './modal-editar-sensor-area.component';

describe('ModalEditarSensorAreaComponent', () => {
  let component: ModalEditarSensorAreaComponent;
  let fixture: ComponentFixture<ModalEditarSensorAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarSensorAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarSensorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
