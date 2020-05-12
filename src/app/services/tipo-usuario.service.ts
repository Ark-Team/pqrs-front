import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TipoUsuario } from '../domain/TipoUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {


  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'tipoUsuario/';
  }

  public save(tipoUsuario: TipoUsuario): Observable<any> {
    return this.httpClient.post(this.url + 'save', tipoUsuario);
  }

  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
  public update(tipoUsuario: TipoUsuario): Observable<any> {
    return this.httpClient.put(this.url + 'update', tipoUsuario);
  }
  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll');
  }

  public cambioEstado(tipoUsuario: TipoUsuario): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', tipoUsuario);
  }
}
