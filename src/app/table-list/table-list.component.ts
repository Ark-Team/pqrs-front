import { Component, OnInit, ViewChild } from '@angular/core';
import { Compania } from '../domain/Compania';
import { CompaniaService } from '../services/compania.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public listaCompanias: Compania[];
  public showMsg: boolean;
  public msg: string;

  displayedColums: string[] = [
    'companiaId', 'nombre', 'direccion', 'email', 'telefono', 'activo', 'opciones'

  ];
  dataSource: MatTableDataSource<Compania>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;


  constructor(public companiaService: CompaniaService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.findAll();
  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }
  public findAll() {
    this.companiaService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  public cambiarEstado(compania: Compania) {
    this.companiaService.cambioEstado(compania).subscribe(data => {
      this.openMatSnackBar('La compañia se modifico con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.mensaje, 'Error');
    });

  }
}
function redireccionar() {
  setTimeout("location.href='/compania-list'", 1000);
}