import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStockDetailComponent } from './card-stock-detail.component';

describe('CardStockDetailComponent', () => {
  let component: CardStockDetailComponent;
  let fixture: ComponentFixture<CardStockDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStockDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
