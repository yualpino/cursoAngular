import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yp-card-group-stock',
  templateUrl: './card-group-stock.component.html',
  styleUrls: ['./card-group-stock.component.css']
})
export class CardGroupStockComponent implements OnInit {
@Input() listaTalleres:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
