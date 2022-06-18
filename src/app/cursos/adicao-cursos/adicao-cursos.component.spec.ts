import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicaoCursosComponent } from './adicao-cursos.component';

describe('AdicaoCursosComponent', () => {
  let component: AdicaoCursosComponent;
  let fixture: ComponentFixture<AdicaoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicaoCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicaoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
