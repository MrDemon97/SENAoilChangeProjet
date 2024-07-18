import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDeleteComponent } from './filtro-delete.component';

describe('FiltroDeleteComponent', () => {
  let component: FiltroDeleteComponent;
  let fixture: ComponentFixture<FiltroDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
