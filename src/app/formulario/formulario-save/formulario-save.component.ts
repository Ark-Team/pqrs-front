import { Component, OnInit, ViewChild } from '@angular/core';
import { Formulario } from '../../domain/Formulario';
import { AtributoFormulario } from '../../domain/AtributoFormulario';
import { AtributoFormularioService } from '../../services/atributo-formulario.service';
import { FormularioService } from '../../services/formulario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../../domain/Usuario';
import { Atributo } from '../../domain/Atributo';
import { AtributoService } from '../../services/atributo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Area } from '../../domain/area';
import { SelectionModel } from '@angular/cdk/collections';
import { CompaniaService } from '../../services/compania.service';

@Component({
  selector: 'app-formulario-save',
  templateUrl: './formulario-save.component.html',
  styleUrls: ['./formulario-save.component.scss']
})
export class FormularioSaveComponent implements OnInit {

  public idAux: string[] = [];
  public listaAtributo: Atributo[];
  public formulario: Formulario;
  public atributo: Atributo;
  public area: Area;
  position: number;
  public atributoFormulario: AtributoFormulario;
  public usuario: Usuario;
  public showMsg: boolean = false;
  public msg: string;
  selection = new SelectionModel<Atributo>(true, []);
  displayedColums: string[] = [
    'nombre', 'descripcion', 'select'
  ];

  dataSource: MatTableDataSource<Atributo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public companiaService: CompaniaService, public atributoFormularioService: AtributoFormularioService, public formularioService: FormularioService, public matSnackBar: MatSnackBar, public atributoService: AtributoService) { }

  ngOnInit() {
    this.getLogic();
    this.findAll();
    this.formulario = new Formulario("", new Date, new Date, "", "44s6a54asds", this.usuario.usuId, "", this.usuario.compId_Compania + "")
    this.atributoFormulario = new AtributoFormulario("kasjdklajsd465", "", "1");
  }

  public openMatSnackBar(mesagge: string, action: string) {
    this.matSnackBar.open(mesagge, action, { duration: 3000 });
  }

  public getIdSelected(id: string) {
    this.idAux[id] = id;
  }

  public getLogic(): Usuario {
    if (localStorage.getItem('User')) {
      this.usuario = JSON.parse(localStorage.getItem('User'));
      return this.usuario;
    }
  }

  public findAll() {
    this.atributoService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public save() {
    this.atributoFormulario.compId_Compania = this.usuario.compId_Compania + "";
    this.formulario.compId_Compania = this.usuario.compId_Compania + "";
    this.formularioService.save(this.formulario).subscribe(data => {
      this.openMatSnackBar('El formulario se grabó con exito', 'Info');
    }, error => {
      this.openMatSnackBar(error.error.mensaje, 'Error');
    });
    for (let index = 0; index < this.idAux.length; index++) {
      this.atributoFormulario.atriId_Atributo = this.idAux[index];
      this.atributoFormularioService.save(this.atributoFormulario).subscribe(data => {
        this.openMatSnackBar('El formulario se grabó con exito', 'Info');
      }, error => {
        this.openMatSnackBar(error.error.mensaje, 'Error');
      });
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Atributo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.atriId + 1}`;
  }
}
function redireccionar() {
  setTimeout("location.href='/area-list'", 800);
}