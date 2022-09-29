import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  
  valorNgClass!: number;
  valorNgStyle!: number;
  listaAlumnos: Array<string> = ['Martin', 'Mauricio', 'Maite'];

  constructor() { }

  ngOnInit(): void {

    this.valorNgClass = 5;
    this.valorNgStyle = 4;
  }

}
