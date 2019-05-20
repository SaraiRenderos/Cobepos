import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent {

  extras = null;
  constructor(private servicioService: ServicioService) {
    servicioService.getExtras()
    .valueChanges().subscribe( extras =>{
    
        this.extras = extras;
      }

    )
    
    
  
  }


}
