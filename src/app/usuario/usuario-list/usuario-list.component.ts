import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../domain/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  public usuario: Usuario;
  public listaUsuario: Usuario[];
  public showMsg: boolean;
  public msg: string;

  displayedColums: string[] = [
    'usuId', 'email', 'tusuId_TipoUsuario', 'fecha', 'estado', 'opciones'

  ];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;


  constructor(public usuarioService: UsuarioService, public matSnackBar: MatSnackBar) { }

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
    this.usuarioService.findAll(this.usuario.compId_Compania + "").subscribe(data => {
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
  public cambiarEstado(usuario: Usuario) {
    this.usuarioService.cambioEstado(usuario).subscribe(data => {
      this.openMatSnackBar('El usuario se modifico con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.mensaje, 'Error');
    });

  }
}
function redireccionar() {
  setTimeout("location.href='/usuario-list'", 1000);
}
