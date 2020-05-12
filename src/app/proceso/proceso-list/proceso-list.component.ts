import { Component, OnInit, ViewChild } from '@angular/core';
import { Proceso } from '../../domain/Proceso';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProcesoService } from '../../services/proceso.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../../domain/Usuario';

@Component({
  selector: 'app-proceso-list',
  templateUrl: './proceso-list.component.html',
  styleUrls: ['./proceso-list.component.scss']
})
export class ProcesoListComponent implements OnInit {

  public listaProceso: Proceso[];
  public showMsg: boolean;
  public msg: string;
  public usuario: Usuario;

  displayedColums: string[] = [
    'nombre', 'fecha', 'estado', 'opciones'

  ];
  dataSource: MatTableDataSource<Proceso>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;


  constructor(public procesoService: ProcesoService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.getLogic();
    this.findAllByCompania();
  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }
  public getLogic(): Usuario {
    if (localStorage.getItem('User')) {
      this.usuario = JSON.parse(localStorage.getItem('User'));
      //console.log('autenticar: ');
      return this.usuario;
    }
  }
  public findAllByCompania() {
    this.procesoService.findAllByCompania(this.usuario.usuId).subscribe(data => {
      for (const fechaCreacion in data) {
        const element = data[fechaCreacion];
        const date: string = element.fechaCreacion.substring(0, 10);
        element.fechaCreacion = date;

      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  public cambiarEstado(proceso: Proceso) {
    this.procesoService.cambioEstado(proceso).subscribe(data => {
      this.openMatSnackBar('El proceso se modifico con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.mensaje, 'Error');
    });

  }
}
function redireccionar() {
  setTimeout("location.href='/proceso-list'", 1000);
}