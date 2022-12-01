import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  countries: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (this.regionActiva == region) return;
    this.regionActiva = region;
    this.countries = [];
    //TODO:hacer el llamado al servicio
    return this.paisService.buscarPaisesByRegion(region).subscribe({
      next: (paises) => {
        //console.log(paises);
        this.countries = paises;
      },
      error: (err) => {
        console.error("El error es by region: "+err);
      },
    });
  }
}
