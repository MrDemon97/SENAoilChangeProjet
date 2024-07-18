import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroUpdateComponent } from './filtro-update.component';

describe('FiltroUpdateComponent', () => {
  let component: FiltroUpdateComponent;
  let fixture: ComponentFixture<FiltroUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
