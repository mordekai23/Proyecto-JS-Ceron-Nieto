import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarDepartamentoComponent } from './modal-editar-departamento.component';

describe('ModalEditarDepartamentoComponent', () => {
  let component: ModalEditarDepartamentoComponent;
  let fixture: ComponentFixture<ModalEditarDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
