import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadingSpinnerComponent } from './button-loading-spinner.component';

describe('ButtonLoadingSpinnerComponent', () => {
  let component: ButtonLoadingSpinnerComponent;
  let fixture: ComponentFixture<ButtonLoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonLoadingSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
