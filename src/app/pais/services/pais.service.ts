import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlAPI: string = 'https://restcountries.com/v3.1';
  private httpParams = new HttpParams().set(
    'fields',
    'population,flags,name,capital,languages,translations,cca2'
  );
  constructor(private httpClient: HttpClient) {}

  public buscarPais(query: string): Observable<Country[]> {
    const endPointFindPaisByName = `/name/${query}`;
    const urlFindPaisByName = `${this.urlAPI}${endPointFindPaisByName}`;
    return this.httpClient.get<Country[]>(urlFindPaisByName, {
      params: this.httpParams,
    });
  }

  public buscarByCapital(capital: string): Observable<Country[]> {
    const endPointFindByCapital = `/capital/${capital}`;
    const urlFindByCapital = `${this.urlAPI}${endPointFindByCapital}`;
    return this.httpClient.get<Country[]>(urlFindByCapital, {
      params: this.httpParams,
    });
  }
  public buscarPaisByCode(code: string): Observable<Country[]> {
    const endPointFindPaisByCode = `/alpha/${code}`;
    const urlFindPaisByCode = `${this.urlAPI}${endPointFindPaisByCode}`;
    return this.httpClient.get<Country[]>(urlFindPaisByCode);
  }

  public buscarPaisesByRegion(region: string): Observable<Country[]> {
    const endPointByRegion = `/region/${region}`;
    const urlFindByRegion = `${this.urlAPI}${endPointByRegion}`;
    return this.httpClient.get<Country[]>(urlFindByRegion, {
      params: this.httpParams,
    });
  }
}
