import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoSearchComponent } from './vehiculo-search.component';

describe('VehiculoSearchComponent', () => {
  let component: VehiculoSearchComponent;
  let fixture: ComponentFixture<VehiculoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
