import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteListComponent } from './aceite-list.component';

describe('AceiteListComponent', () => {
  let component: AceiteListComponent;
  let fixture: ComponentFixture<AceiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceiteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
