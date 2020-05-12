import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../domain/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  public id: string;
  public usuario: Usuario;
  public listaUsuario: Usuario[];
  public showMsg: boolean = false;
  public msg: string;
  constructor(public router: Router, public activateRoute: ActivatedRoute, public usuarioService: UsuarioService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadCompania();

  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }
  public update() {
    this.usuarioService.update(this.usuario).subscribe(data => {
      this.openMatSnackBar('El usuario se modifico con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.error.mensaje, 'Error');
    });
  }
  public loadCompania() {
    let params = this.activateRoute.params['_value'];
    console.log(params.id);
    this.id = params.id;
    console.log(this.id);
    this.usuarioService.findById(this.id).subscribe(data => {
      this.usuario = data;
    })
  }
}
function redireccionar() {
  setTimeout("location.href='/usuario-list'", 4000);
}