import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent{

  postres = null;
  constructor(private servicioService: ServicioService) {
    servicioService.getPostres()
    .valueChanges().subscribe( postres =>{
    
        this.postres = postres;
      }

    )
  
  }

}
