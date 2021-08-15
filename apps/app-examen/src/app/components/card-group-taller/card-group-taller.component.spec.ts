import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupTallerComponent } from './card-group-taller.component';

describe('CardGroupTallerComponent', () => {
  let component: CardGroupTallerComponent;
  let fixture: ComponentFixture<CardGroupTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGroupTallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
