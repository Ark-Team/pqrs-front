import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../domain/Usuario';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'area-list', title: 'Area', icon: 'design_bullet-list-67', class: '' },
  { path: 'usuario-list', title: 'Usuario', icon: 'design_bullet-list-67', class: '' },
  { path: 'proceso-list', title: 'Proceso', icon: 'design_bullet-list-67', class: '' },
  { path: 'formulario-save', title: 'Formulario', icon: 'design_bullet-list-67', class: '' },
];

export const ROUTES1: RouteInfo[] = [
  { path: 'usuario-list', title: 'Usuario', icon: 'design_bullet-list-67', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  usuario: Usuario;

  constructor() { }

  ngOnInit() {
    this.getRoutes();
  }

  public getRoutes() {
    this.usuario = JSON.parse(localStorage.getItem('User'));
    switch (this.usuario.tusuId_TipoUsuario) {
      case "5e8118c39dd3ff1a985fbd5a":
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        break;
      case "5e93ae7c119e680abcfc0742":
        this.menuItems = ROUTES1.filter(menuItem => menuItem);
        break;
    }
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  };
}
