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
import { ExtrasComponent } from './extras/extras.component';
import { FormsModule }   from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const  appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Platos', component: PlatosComponent},
  {path:'Bebidas', component: BebidasComponent},
  {path:'Postres', component: PostresComponent},
  {path:'Comentarios', component: ComentariosComponent},
  {path:'Alcoholicas', component: AlcolicasComponent},
  {path:'Extras', component: ExtrasComponent}

];
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAYf9bIdL6IdsGH29LlpQu69DeCyyEyin4",
    authDomain: "cobepos.firebaseapp.com",
    databaseURL: "https://cobepos.firebaseio.com",
    projectId: "cobepos",
    storageBucket: "cobepos.appspot.com",
    messagingSenderId: "196783109202",
    appId: "1:196783109202:web:c19b1fa43acee254"
  }
};




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatosComponent,
    BebidasComponent,
    PostresComponent,
    ComentariosComponent,
    AlcolicasComponent,
    ExtrasComponent
   
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase, 'Cobepos'), 
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
