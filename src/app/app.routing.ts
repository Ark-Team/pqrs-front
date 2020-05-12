import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AsesorLayoutComponent } from './layouts/asesor-layout/asesor-layout.component';

const routes: Routes =[
  { path: '', component: LoginComponent}, 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'asesores',
    component: AsesorLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/asesor-layout/asesor-layout.module#AsesorLayoutModule'
  }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
