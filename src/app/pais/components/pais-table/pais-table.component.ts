import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {

  @Input() countries:Country[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
