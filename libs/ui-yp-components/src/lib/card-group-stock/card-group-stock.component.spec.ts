import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupStockComponent } from './card-group-stock.component';

describe('CardGroupStockComponent', () => {
  let component: CardGroupStockComponent;
  let fixture: ComponentFixture<CardGroupStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGroupStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
