import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UsuarioListComponent } from '../../usuario/usuario-list/usuario-list.component';

export const AsesorLayoutRoutingModule: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'usuario-list', component: UsuarioListComponent },
]