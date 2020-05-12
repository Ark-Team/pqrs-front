import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from '../domain/Formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'formulario/';
  }

  public findAll(compId: string): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + compId);
  }

  public save(formulario: Formulario): Observable<any> {
    return this.httpClient.post(this.url + 'save', formulario);
  }
  public update(formulario: Formulario): Observable<any> {
    return this.httpClient.put(this.url + 'update', formulario);
  }
  public cambioEstado(formulario: Formulario): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', formulario);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
}