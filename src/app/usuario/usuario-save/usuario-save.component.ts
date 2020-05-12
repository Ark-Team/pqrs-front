import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../domain/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoUsuarioService } from '../../services/tipo-usuario.service';
import { TipoUsuario } from '../../domain/TipoUsuario';

@Component({
  selector: 'app-usuario-save',
  templateUrl: './usuario-save.component.html',
  styleUrls: ['./usuario-save.component.scss']
})
export class UsuarioSaveComponent implements OnInit {

  public idAux: string;
  public tiposUsuario: TipoUsuario[];
  public usuario: Usuario;
  public usuarioLog: Usuario;
  public showMsg: boolean = false;
  public msg: string;
  constructor(public usuarioService: UsuarioService, public matSnackBar: MatSnackBar, public tipoUsuarioService: TipoUsuarioService) { }

  ngOnInit() {
    this.getLogic();
    this.loadListTipoUsuario();
    this.usuario = new Usuario("", "", "", new Date, new Date, null, "", null, "", "", "", "", "");
  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }

  public getLogic(): Usuario {
    if (localStorage.getItem('User')) {
      this.usuarioLog = JSON.parse(localStorage.getItem('User'));
      //console.log('autenticar: ');
      return this.usuario;
    }
  }
  public loadListTipoUsuario() {
    this.tipoUsuarioService.findAll().subscribe(data => {
      this.tiposUsuario = data;
    });
  }
  public getIdSelected(id: string) {
    this.idAux = id;
  }
  public save() {
    this.usuario.tusuId_TipoUsuario = this.idAux;
    this.usuario.compId_Compania = this.usuarioLog.compId_Compania;
    this.usuarioService.save(this.usuario).subscribe(data => {
      console.log(data);
      this.openMatSnackBar('El usuario se grabó con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.mensaje, 'Error');
    });
  }
}
function redireccionar() {
  setTimeout("location.href='/admin/usuario-list'", 800);
}