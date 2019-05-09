import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  usuario = null;
  Body = null;
  comment:any = {};
  constructor(private servicioService: ServicioService ){
    // Body: HTMLInputElement  = <HTMLInputElement>document.getElementById('body') as HTMLInputElementHTMLInputElement;
    
    this.usuario = servicioService.getComentarios();
  servicioService.getComentarios()
  .valueChanges().subscribe( comentario =>{
   
      this.usuario = comentario;
    }

    )
  }
  getComentario(){

    this.comment.id = Date.now();
    this.servicioService.saveComentario(this.comment);
    this.comment ={};
  this.Body.classList.replace("comentar", "hidden");
  }
  
}