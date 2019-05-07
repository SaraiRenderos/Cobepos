import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  extras = null;
  constructor(private servicioService: ServicioService) {
    this.extras = servicioService.getExtras();
    
    
  
  }


}
