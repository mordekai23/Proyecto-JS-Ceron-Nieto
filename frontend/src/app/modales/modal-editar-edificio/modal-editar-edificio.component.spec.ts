import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEdificioComponent } from './modal-editar-edificio.component';

describe('ModalEditarEdificioComponent', () => {
  let component: ModalEditarEdificioComponent;
  let fixture: ComponentFixture<ModalEditarEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
