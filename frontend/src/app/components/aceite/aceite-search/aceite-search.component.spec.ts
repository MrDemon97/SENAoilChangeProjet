import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteSearchComponent } from './aceite-search.component';

describe('AceiteSearchComponent', () => {
  let component: AceiteSearchComponent;
  let fixture: ComponentFixture<AceiteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceiteSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceiteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
