import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {

  calientes = null;
  frias = null;

  constructor(private servicioService: ServicioService) {
    servicioService.getCalientes()
    .valueChanges().subscribe( caliente =>{
    
        this.calientes = caliente;
      }

    )
    servicioService.getFrias()
    .valueChanges().subscribe( frias =>{
    
        this.frias = frias;
      }

    )
    
  
  }

}
