import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Proceso } from '../domain/Proceso';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'proceso/';
  }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll');
  }

  public findAllByCompania(usuId: String): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + usuId);
  }
  public save(proceso: Proceso): Observable<any> {
    return this.httpClient.post(this.url + 'save', proceso);
  }
  public update(proceso: Proceso): Observable<any> {
    return this.httpClient.put(this.url + 'update', proceso);
  }
  public cambioEstado(proceso: Proceso): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', proceso);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
}