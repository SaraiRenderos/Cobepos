import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioService } from './servicio.service';
import { HomeComponent } from './home/home.component';
import { PlatosComponent } from './platos/platos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { AlcolicasComponent } from './alcolicas/alcolicas.component';
const  appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Platos', component: PlatosComponent},
  {path:'Bebidas', component: BebidasComponent},
  {path:'Postres', component: PostresComponent},
  {path:'Comentarios', component: ComentariosComponent},
  {path:'Alcoholicas', component: AlcolicasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatosComponent,
    BebidasComponent,
    PostresComponent,
    ComentariosComponent,
    AlcolicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
   RouterModule.forRoot(appRoutes)

  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
