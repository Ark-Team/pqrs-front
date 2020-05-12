import { Component, OnInit } from '@angular/core';
import { Area } from '../../domain/area';
import { Proceso } from '../../domain/Proceso';
import { AreaService } from '../../services/area.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProcesoService } from '../../services/proceso.service';
import { Usuario } from '../../domain/Usuario';

@Component({
  selector: 'app-proceso-save',
  templateUrl: './proceso-save.component.html',
  styleUrls: ['./proceso-save.component.scss']
})
export class ProcesoSaveComponent implements OnInit {

  public idAux: string;
  public areas: Area[];
  public area: Area;
  public usuario: Usuario;
  public proceso: Proceso;
  public showMsg: boolean = false;
  public msg: string;
  constructor(public areaService: AreaService, public matSnackBar: MatSnackBar, public procesoService: ProcesoService) { }

  ngOnInit() {
    this.getLogic();
    this.loadAreas();
    this.proceso = new Proceso("", new Date, new Date, "", "", "", "", "");
  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }

  public confirma() {
    this.areaService.findById(this.area.compId_Compania + "").subscribe(data => {
      alert('Nombre del area: ' + data.nombre);
    }, error => {
      this.openMatSnackBar(error.mensaje, 'Error');
    })
  }

  public getLogic(): Usuario {
    if (localStorage.getItem('User')) {
      this.usuario = JSON.parse(localStorage.getItem('User'));
      //console.log('autenticar: ');
      return this.usuario;
    }
  }
  public getIdSelected(id: string) {
    this.idAux = id;
  }
  public loadAreas() {
    this.areaService.findAll(this.usuario.compId_Compania + "").subscribe(data => {
      this.areas = data;
    });
  }
  public save() {
    this.proceso.areaId_Area = this.idAux;
    this.procesoService.save(this.proceso).subscribe(data => {
      this.openMatSnackBar('El proceso se grabó con exito', 'Info');
      redireccionar();

    }, error => {
      this.openMatSnackBar(error.error.mensaje, 'Error');
    });
  }
}
function redireccionar() {
  setTimeout("location.href='/proceso-list'", 1000);
}

