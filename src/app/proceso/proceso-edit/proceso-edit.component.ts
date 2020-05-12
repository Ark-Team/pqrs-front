import { Component, OnInit } from '@angular/core';
import { Proceso } from '../../domain/Proceso';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcesoService } from '../../services/proceso.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proceso-edit',
  templateUrl: './proceso-edit.component.html',
  styleUrls: ['./proceso-edit.component.scss']
})
export class ProcesoEditComponent implements OnInit {

  public id: string;
  public proceso: Proceso;
  public listaProceso: Proceso[];
  public showMsg: boolean = false;
  public msg: string;
  constructor(public router: Router, public activateRoute: ActivatedRoute, public procesoService: ProcesoService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadProceso();

  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }
  public update() {
    this.procesoService.update(this.proceso).subscribe(data => {
      this.openMatSnackBar('La compañia se modifico con exito', 'Info');
      redireccionar();
    }, error => {
      this.openMatSnackBar(error.error.mensaje, 'Error');
    });

  }

  public loadProceso() {
    let params = this.activateRoute.params['_value'];
    console.log(params.id);
    this.id = params.id;
    console.log(this.id);
    this.procesoService.findById(this.id).subscribe(data => {
      this.proceso = data;
    })
  }
}

function redireccionar() {
  setTimeout("location.href='/proceso-list'", 1000);
}