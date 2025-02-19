import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCreateComponent } from './mantenimiento-create.component';

describe('MantenimientoCreateComponent', () => {
  let component: MantenimientoCreateComponent;
  let fixture: ComponentFixture<MantenimientoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
