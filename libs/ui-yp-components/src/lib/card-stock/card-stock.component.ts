import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yp-card-stock',
  templateUrl: './card-stock.component.html',
  styleUrls: ['./card-stock.component.css']
})
export class CardStockComponent implements OnInit {
  @Input() ulrImage:string="";
  @Input() titleCard:string="";
  @Input() fecha:string="";
  @Input() hora:string="";
  @Input() Instructor:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
