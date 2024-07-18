import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCreateComponent } from './filtro-create.component';

describe('FiltroCreateComponent', () => {
  let component: FiltroCreateComponent;
  let fixture: ComponentFixture<FiltroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
