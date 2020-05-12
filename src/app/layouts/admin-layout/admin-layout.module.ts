import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AreaSaveComponent } from '../../area/area-save/area-save.component';
import { AreaListComponent } from '../../area/area-list/area-list.component';
import { AreaEditComponent } from '../../area/area-edit/area-edit.component';
import { UsuarioSaveComponent } from '../../usuario/usuario-save/usuario-save.component';
import { UsuarioEditComponent } from '../../usuario/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from '../../usuario/usuario-list/usuario-list.component';
import { ProcesoListComponent } from '../../proceso/proceso-list/proceso-list.component';
import { ProcesoSaveComponent } from '../../proceso/proceso-save/proceso-save.component';
import { ProcesoEditComponent } from '../../proceso/proceso-edit/proceso-edit.component';
import { FormularioSaveComponent } from '../../formulario/formulario-save/formulario-save.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    MatTableModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    CdkTableModule,
    ToastrModule.forRoot(),

  ],
  declarations: [
    UserProfileComponent,
    TableListComponent,
    AreaSaveComponent,
    AreaListComponent,
    AreaEditComponent,
    UsuarioSaveComponent,
    UsuarioEditComponent,
    UsuarioListComponent,
    ProcesoListComponent,
    ProcesoSaveComponent,
    ProcesoEditComponent,
    FormularioSaveComponent,
  ]
})

export class AdminLayoutModule { }
