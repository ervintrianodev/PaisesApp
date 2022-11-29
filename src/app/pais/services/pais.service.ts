import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlAPI: string = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) {}

  public buscarPais(query: string): Observable<Country[]> {
    const endPointFindPaisByName = `/name/${query}`;
    const urlFindPaisByName = `${this.urlAPI}${endPointFindPaisByName}`;
    return this.httpClient.get<Country[]>(urlFindPaisByName);
  }

  public buscarByCapital(capital: string): Observable<Country[]> {
    const endPointFindByCapital = `/capital/${capital}`;
    const urlFindByCapital = `${this.urlAPI}${endPointFindByCapital}`;
    return this.httpClient.get<Country[]>(urlFindByCapital);
  }
  public buscarPaisByCode(code: string): Observable<Country[]> {
    const endPointFindPaisByCode = `/alpha/${code}`;
    const urlFindPaisByCode = `${this.urlAPI}${endPointFindPaisByCode}`;
    return this.httpClient.get<Country[]>(urlFindPaisByCode);
  }
}
