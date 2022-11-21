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
  public contador: number = 0;
  
  public placeholder:string="Buscar por Pais...";

  constructor(private paisService: PaisService) {}

  public buscar(termino: string): void {
    this.hayError = false;
    console.log(this.termino);
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.countries = paises;
        console.log(paises);
      },
      (err) => {
        this.hayError = true;
        this.countries = [];
        console.log(err.status);
      }
    );
  }


  public sugerencias(event:any):void{
    this.hayError =false;
    //TODO:crear sugerencias

  }
}
