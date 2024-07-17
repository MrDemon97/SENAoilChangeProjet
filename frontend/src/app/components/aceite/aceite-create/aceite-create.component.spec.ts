import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteCreateComponent } from './aceite-create.component';

describe('AceiteCreateComponent', () => {
  let component: AceiteCreateComponent;
  let fixture: ComponentFixture<AceiteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceiteCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
