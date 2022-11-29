import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './pais/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pais/pages/by-country/by-country.component';
import { ByRegionComponent } from './pais/pages/by-region/by-region.component';
import { ShowCountriesComponent } from './pais/pages/show-countries/show-countries.component';

const routes: Routes = [
  { path: '', component: ByCountryComponent, pathMatch: 'full' },
  { path: 'region', component: ByRegionComponent },
  { path: 'capital', component: ByCapitalComponent },
  { path: 'pais/:countrycode', component: ShowCountriesComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
