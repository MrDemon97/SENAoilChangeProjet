import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoUpdateComponent } from './vehiculo-update.component';

describe('VehiculoUpdateComponent', () => {
  let component: VehiculoUpdateComponent;
  let fixture: ComponentFixture<VehiculoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
