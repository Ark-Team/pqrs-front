import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Compania } from '../domain/Compania';

@Injectable({
  providedIn: 'root'
})
export class CompaniaService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'compania/';
  }

  public save(compania: Compania): Observable<any> {
    return this.httpClient.post(this.url + 'save', compania);
  }

  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
  public update(compania: Compania): Observable<any> {
    return this.httpClient.put(this.url + 'update', compania);
  }
  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll');
  }

  public cambioEstado(compania: Compania): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', compania);
  }
}