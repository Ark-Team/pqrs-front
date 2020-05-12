import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Area } from '../domain/area';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.url + 'area/';
  }

  public findAll(compId: string): Observable<any> {
    return this.httpClient.get(this.url + 'findAllByCompania/' + compId);
  }

  public save(area: Area): Observable<any> {
    return this.httpClient.post(this.url + 'save', area);
  }
  public update(area: Area): Observable<any> {
    return this.httpClient.put(this.url + 'update', area);
  }
  public cambioEstado(area: Area): Observable<any> {
    return this.httpClient.put(this.url + 'cambioEstado', area);
  }
  public findById(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + id)
  }
}