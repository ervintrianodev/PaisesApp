import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  public termino: string = '';
  public hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  public buscar(): void {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        this.hayError = true;
        console.log(err.status);
      }
    );
  }
}
