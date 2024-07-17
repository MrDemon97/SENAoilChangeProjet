import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteDeleteComponent } from './aceite-delete.component';

describe('AceiteDeleteComponent', () => {
  let component: AceiteDeleteComponent;
  let fixture: ComponentFixture<AceiteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceiteDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceiteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
