import { Component, OnInit } from '@angular/core';
import { Login } from '../domain/Login';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../services/usuario.service';
import { CompaniaService } from '../services/compania.service';
import { Compania } from '../domain/Compania';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public registerAux: boolean = false;
  public login:Login;
  public compania:Compania;

  constructor(public router:Router, public matSnackBar:MatSnackBar, public usuarioService:UsuarioService,
    public companiaService:CompaniaService) { }

  public openMatSnackBar(mesagge: string, action: string) {
      this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }

  ngOnInit() {
    this.login = new Login("","");
    this.compania = new Compania("","","","S",new Date,null,"",null,"","");
  }

  public doLogin(){
    this.usuarioService.findById(this.login.username).subscribe(data=>{
      if (data.activo == 'N') {
        this.openMatSnackBar('Usuario esta desacivado', 'Info');
      }
      if (this.login.clave == data.clave && this.login.username == data.usuId && data.estado=='S') {
        localStorage.setItem('User', JSON.stringify(data));
        switch (data.tusuId_TipoUsuario) {
          case "5e8118c39dd3ff1a985fbd5a":
            redireccionar("admin")
            break;
          case ("5e93ae7c119e680abcfc0742"):
            redireccionar("asesores")
            break;
        }
      } else {
        this.openMatSnackBar('Usuario o clave invalida', 'Error');
      }
    })
  }

  public register(){
    this.companiaService.save(this.compania).subscribe(data=>{
      alert('La compañia se ha creado con exito.')
      redireccionar("");
    }, error => {
      this.openMatSnackBar(error, 'Error');
    });
  }


  public registerOn():boolean{
    return this.registerAux = true;
  }


}
function redireccionar(ruta:String) {
  setTimeout("location.href='/"+ruta+"'", 1000);
}