import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  public termino: string = '';
  public hayError: boolean = false;
  public countries: Country[] = [];
  public countriesSugeridos: Country[] = [];
  public contador: number = 0;
  public showSugerencia: boolean = false;

  public placeholder: string = 'Buscar por Pais...';

  constructor(private paisService: PaisService) {}

  public buscar(termino: string): void {
    this.hayError = false;
    this.showSugerencia = false;
    console.log(this.termino);
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.countries = paises;
        console.log(paises);
      },
      error: (err) => {
        this.hayError = true;
        this.countries = [];
        console.log(err.status);
      },
    });
  }

  public sugerencias(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.showSugerencia = true;
    //TODO:crear sugerencias
    this.paisService.buscarPais(termino).subscribe({
      next: (paises) => {
        this.countriesSugeridos = paises.splice(0, 5);
      },
      error: (err) => {
        this.countriesSugeridos = [];
      },
    });
  }

  public buscarSugerido(termino: string): void {
    this.buscar(termino);
  }
}
