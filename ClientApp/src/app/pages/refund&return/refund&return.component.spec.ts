import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundReturnComponent } from './refund&return.component';

describe('RefundReturnComponent', () => {
  let component: RefundReturnComponent;
  let fixture: ComponentFixture<RefundReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
