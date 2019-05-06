import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-alcolicas',
  templateUrl: './alcolicas.component.html',
  styleUrls: ['./alcolicas.component.css']
})
export class AlcolicasComponent{
  alcohol = null;
  constructor(private serviceService :ServicioService) {
    this.alcohol = serviceService.getAlcoholica();
   }


}
