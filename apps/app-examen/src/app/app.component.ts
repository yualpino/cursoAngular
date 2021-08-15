import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lstTalleres=[{
    titleCard:"Curso Taller 1",
    fecha:"15/08/2021",
    hora:"08:00-15:00",
    Instructor:"Carlos Osorio",
    ulrImage:"curso-taller.jpg"
  },
  {
    titleCard:"Curso Taller 2",
    fecha:"17/08/2021",
    hora:"08:00-15:00",
    Instructor:"Jan caballero",
    ulrImage:"curso-taller-2.jpg"
  },
  {
    titleCard:"Curso Taller 3",
    fecha:"19/08/2021",
    hora:"08:00-15:00",
    Instructor:"Jorge Valverde",
    ulrImage:"curso-taller.jpg"
  },
  {
    titleCard:"Curso Taller 4",
    fecha:"12/08/2021",
    hora:"08:00-15:00",
    Instructor:"Jaime Haillman",
    ulrImage:"curso-taller-2.jpg"
  },
  {
    titleCard:"Curso Taller 5",
    fecha:"13/08/2021",
    hora:"08:00-15:00",
    Instructor:"Moises Lllanos",
    ulrImage:"curso-taller.jpg"
  },
  {
    titleCard:"Curso Taller 6",
    fecha:"15/08/2021",
    hora:"08:00-15:00",
    Instructor:"Luis Garcia",
    ulrImage:"curso-taller-2.jpg"
  },
];




}
