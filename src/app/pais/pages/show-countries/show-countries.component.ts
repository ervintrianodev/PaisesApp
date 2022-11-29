import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-show-countries',
  templateUrl: './show-countries.component.html',
  styleUrls: ['./show-countries.component.css'],
})
export class ShowCountriesComponent implements OnInit {
  public country!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    /*
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.buscarPaisByCode(id)))
      .subscribe((response) => {
        console.log(response);
      });*/

    this.activatedRoute.params.subscribe(({ countrycode }) => {
      console.log(countrycode);
      this.paisService.buscarPaisByCode(countrycode).subscribe({
        next: (pais:Country[]) => {
          console.log(pais)
          this.country = pais[0];
        },
        error: (err) => {},
      });
    });
  }
}
