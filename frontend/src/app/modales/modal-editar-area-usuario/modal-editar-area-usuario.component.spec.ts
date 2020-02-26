import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAreaUsuarioComponent } from './modal-editar-area-usuario.component';

describe('ModalEditarAreaUsuarioComponent', () => {
  let component: ModalEditarAreaUsuarioComponent;
  let fixture: ComponentFixture<ModalEditarAreaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarAreaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarAreaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
