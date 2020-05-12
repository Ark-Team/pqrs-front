import { Component, OnInit } from '@angular/core';
import { Area } from '../../domain/area';
import { Compania } from '../../domain/Compania';
import { AreaService } from '../../services/area.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompaniaService } from '../../services/compania.service';
import { Usuario } from '../../domain/Usuario';

@Component({
  selector: 'app-area-save',
  templateUrl: './area-save.component.html',
  styleUrls: ['./area-save.component.scss']
})
export class AreaSaveComponent implements OnInit {

  public usuario: Usuario;
  public area: Area;
  public compania: Compania;
  public showMsg: boolean = false;
  public msg: string;
  constructor(public areaService: AreaService, public matSnackBar: MatSnackBar, public companiaService: CompaniaService) { }

  ngOnInit() {
    this.getLogic();
    this.area = new Area(null, "", new Date, new Date, "", "", "", "");
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
  public confirma() {
    this.companiaService.findById(this.area.compId_Compania + "").subscribe(data => {
      alert('Nombre de la compañia: ' + data.nombre);
    }, error => {
      this.openMatSnackBar(error.error.mensaje, 'Error');
    })
  }

  public save() {
    this.area.compId_Compania = this.usuario.compId_Compania + "";
    this.areaService.save(this.area).subscribe(data => {
      this.openMatSnackBar('El area se grabó con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.error.mensaje, 'Error');
    });
  }
}
function redireccionar() {
  setTimeout("location.href='/area-list'", 800);
}