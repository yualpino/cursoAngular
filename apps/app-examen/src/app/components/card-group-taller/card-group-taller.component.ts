import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-group-taller',
  templateUrl: './card-group-taller.component.html',
  styleUrls: ['./card-group-taller.component.css']
})
export class CardGroupTallerComponent implements OnInit {
  @Input() listaTalleres:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
