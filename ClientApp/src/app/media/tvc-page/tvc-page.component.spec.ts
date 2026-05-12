import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVCPageComponent } from './tvc-page.component';

describe('TVCPageComponent', () => {
  let component: TVCPageComponent;
  let fixture: ComponentFixture<TVCPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVCPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVCPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
