import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteUpdateComponent } from './aceite-update.component';

describe('AceiteUpdateComponent', () => {
  let component: AceiteUpdateComponent;
  let fixture: ComponentFixture<AceiteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceiteUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceiteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
