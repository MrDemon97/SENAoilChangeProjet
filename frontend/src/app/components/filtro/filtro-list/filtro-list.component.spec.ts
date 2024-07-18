import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroListComponent } from './filtro-list.component';

describe('FiltroListComponent', () => {
  let component: FiltroListComponent;
  let fixture: ComponentFixture<FiltroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
