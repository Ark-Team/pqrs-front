import { Component, OnInit } from '@angular/core';
import { Area } from '../../domain/area';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaService } from '../../services/area.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.scss']
})
export class AreaEditComponent implements OnInit {

  public id: string;
  public area: Area;
  public listaEstado: Area[];
  public showMsg: boolean = false;
  public msg: string;
  constructor(public router: Router, public activateRoute: ActivatedRoute, public areaService: AreaService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadArea();

  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }
  public update() {
    this.areaService.update(this.area).subscribe(data => {
      this.openMatSnackBar('El estado se modifico con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.mensaje, 'Error');
    });

  }

  public loadArea() {

    let params = this.activateRoute.params['_value'];
    this.id = params.id;
    this.areaService.findById(this.id).subscribe(data => {
      const date: string = data.fechaCreacion.substring(0, 10);
      data.fechaCreacion = date;
      const date2: string = data.fechaModificacion.substring(0, 10);
      data.fechaModificacion = date2;
      this.area = data;
    })
  }
}

function redireccionar() {
  setTimeout("location.href='/area-list'", 1000);
}
