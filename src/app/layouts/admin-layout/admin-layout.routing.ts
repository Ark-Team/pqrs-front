import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { AreaSaveComponent } from '../../area/area-save/area-save.component';
import { AreaListComponent } from '../../area/area-list/area-list.component';
import { AreaEditComponent } from '../../area/area-edit/area-edit.component';
import { UsuarioListComponent } from '../../usuario/usuario-list/usuario-list.component';
import { UsuarioSaveComponent } from '../../usuario/usuario-save/usuario-save.component';
import { UsuarioEditComponent } from '../../usuario/usuario-edit/usuario-edit.component';
import { ProcesoListComponent } from '../../proceso/proceso-list/proceso-list.component';
import { ProcesoSaveComponent } from '../../proceso/proceso-save/proceso-save.component';
import { AuthGuard } from '../../guards/auth.guard';
import { ProcesoEditComponent } from '../../proceso/proceso-edit/proceso-edit.component';
import { FormularioSaveComponent } from '../../formulario/formulario-save/formulario-save.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'area-save', component: AreaSaveComponent },
    { path: 'area-list', component: AreaListComponent },
    { path: 'area-edit/:id', component: AreaEditComponent },
    { path: 'usuario-list', component: UsuarioListComponent },
    { path: 'usuario-save', component: UsuarioSaveComponent },
    { path: 'usuario-edit/:id', component: UsuarioEditComponent },
    { path: 'proceso-list', component: ProcesoListComponent },
    { path: 'proceso-save', component: ProcesoSaveComponent },
    { path: 'proceso-edit/:id', component: ProcesoEditComponent },
    { path: 'formulario-save', component: FormularioSaveComponent },
];
