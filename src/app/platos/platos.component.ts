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

    servicioService.getItalia()
    .valueChanges().subscribe( italia =>{
    
        this.italia = italia;
      }

    )
    servicioService.getFrancia()
    .valueChanges().subscribe( francia =>{
    
        this.francia = francia;
      }

    )
    servicioService.getAmericana()
    .valueChanges().subscribe( ameriacana =>{
    
        this.americana = ameriacana;
      }

    )
    servicioService.getJapon()
    .valueChanges().subscribe( japon =>{
    
        this.japon = japon;
      }

    )
    servicioService.getChina()
    .valueChanges().subscribe( china =>{
    
        this.china = china;
      }

    )
    servicioService.getSalvador()
    .valueChanges().subscribe( salvador =>{
    
        this.salvador = salvador;
      }

    )
    servicioService.getMexico()
    .valueChanges().subscribe( mexico =>{
    
        this.mexico = mexico;
      }

    )



    this.italia = servicioService.getItalia();
    this.francia = servicioService.getFrancia();
    this.mexico = servicioService.getMexico();
    this.americana = servicioService.getAmericana();
    this.china = servicioService.getChina();
    this.japon = servicioService.getJapon();
    this.salvador = servicioService.getSalvador();
  
  }


}
