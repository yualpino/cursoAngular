import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiYpComponentsComponent } from './ui-yp-components.component';

describe('UiYpComponentsComponent', () => {
  let component: UiYpComponentsComponent;
  let fixture: ComponentFixture<UiYpComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiYpComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiYpComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
