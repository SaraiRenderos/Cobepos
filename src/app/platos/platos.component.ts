import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent {
  italia = null;
  constructor(private servicioService: ServicioService) {
    this.italia = servicioService.getItalia();
   }


}
