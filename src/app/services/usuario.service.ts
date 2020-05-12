import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../domain/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'usuario/';
  }

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.url + 'save', usuario);
  }

  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
  public update(usuario: Usuario): Observable<any> {
    return this.httpClient.put(this.url + 'update', usuario);
  }
  public findAll(compId: string): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + compId);
  }

  public cambioEstado(usuario: Usuario): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', usuario);
  }
}