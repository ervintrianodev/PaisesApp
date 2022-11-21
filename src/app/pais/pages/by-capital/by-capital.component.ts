import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent implements OnInit {
  public termino: string = '';
  public countries: Country[] = [];
  public hayError: boolean = false;
  public placeholder:string="Buscar por Capital..."
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  public buscarCapital(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarByCapital(this.termino).subscribe({
      next: (response) => {
        this.countries = response;
      },
      error: (err) => {
        this.hayError = true;
        this.countries = [];
      },
    });
  }

  public sugerencias(event: any): void {
    this.hayError = false;
    //TODO:crear sugerencias
  }
}
