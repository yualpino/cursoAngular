import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() textAction!:string;
  @HostBinding('class') className= 'btn btn-primary'
  @HostBinding('style') style= 'background: red'

  

  constructor() { }

  ngOnInit(): void {
  }

}
