import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  Ofertas = null;
  constructor(private servicioService: ServicioService) {
    this.Ofertas = servicioService.getPlatos();
   }

  

}