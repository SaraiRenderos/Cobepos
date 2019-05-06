import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent {
  italia = null;
  francia = null;
  mexico = null;
  americana = null;
  china = null;
  japon = null;
  salvador = null;
  constructor(private servicioService: ServicioService) {
    this.italia = servicioService.getItalia();
    this.francia = servicioService.getFrancia();
    this.mexico = servicioService.getMexico();
    this.americana = servicioService.getAmericana();
    this.china = servicioService.getChina();
    this.japon = servicioService.getJapon();
    this.salvador = servicioService.getSalvador();
  
  }


}
