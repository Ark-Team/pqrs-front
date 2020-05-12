import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AtributoFormulario } from '../domain/AtributoFormulario';

@Injectable({
  providedIn: 'root'
})
export class AtributoFormularioService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'atributoFormulario/';
  }

  public findAll(compId: string): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + compId);
  }

  public save(atributoFormulario: AtributoFormulario): Observable<any> {
    return this.httpClient.post(this.url + 'save', atributoFormulario);
  }
  public update(atributoFormulario: AtributoFormulario): Observable<any> {
    return this.httpClient.put(this.url + 'update', atributoFormulario);
  }
  public cambioEstado(atributoFormulario: AtributoFormulario): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', atributoFormulario);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
}