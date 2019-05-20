import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  img = null;
  Ofertas = null;
  string = null;
  constructor(private servicioService: ServicioService) {
    
      servicioService.getPlatos()
    .valueChanges().subscribe( oferta =>{
    
        this.Ofertas = oferta;
      }

    )
    this.img = servicioService.getContactos();
    this.string = servicioService.getContactos();
   }

  

}