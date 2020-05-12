import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Area } from '../../domain/area';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AreaService } from '../../services/area.service';
import { Usuario } from '../../domain/Usuario';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit {
  public listaArea: Area[];
  public showMsg: boolean;
  public msg: string;
  public usuario: Usuario;

  displayedColums: string[] = [
    'nombre', 'fechaCreacion', 'estado', 'opciones'
  ];

  dataSource: MatTableDataSource<Area>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;


  constructor(public areaService: AreaService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.getLogic();
    this.findAll();
  }

  public getLogic(): Usuario {
    if (localStorage.getItem('User')) {
      this.usuario = JSON.parse(localStorage.getItem('User'));
      //console.log('autenticar: ');
      return this.usuario;
    }
  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }
  public findAll() {
    this.areaService.findAll(this.usuario.compId_Compania + "").subscribe(data => {
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

  public cambiarEstado(area: Area) {
    this.areaService.cambioEstado(area).subscribe(data => {
      this.openMatSnackBar('El area se modifico con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.mensaje, 'Error');
    });

  }
}
function redireccionar() {
  setTimeout("location.href='/area-list'", 1000);
}