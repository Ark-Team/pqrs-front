import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Atributo } from '../domain/Atributo';

@Injectable({
  providedIn: 'root'
})
export class AtributoService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'atributo/';
  }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll/');
  }

  public save(atributo: Atributo): Observable<any> {
    return this.httpClient.post(this.url + 'save', atributo);
  }
  public update(atributo: Atributo): Observable<any> {
    return this.httpClient.put(this.url + 'update', atributo);
  }
  public cambioEstado(atributo: Atributo): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', atributo);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
}