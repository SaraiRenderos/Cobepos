import { Injectable } from '@angular/core';
import { compileNgModule } from '@angular/core/src/render3/jit/module';
import { AngularFirestore } from"@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private afDB:AngularFirestore){}

  getComentarios(){
    return this.afDB.collection('/Comentarios');
  }
   getPlatos(){
    return this.afDB.collection('/Ofertas');
    
  }
  saveComentario(comentario){
    this.afDB.collection('Comentarios').doc(comentario.id.toString()).set(comentario); 
console.log(comentario)
  }
  public getItalia(){
return this.afDB.collection('/Italia');
  }
  public getFrancia(){
return this.afDB.collection('/Francia');
  }
  public getMexico(){
return this.afDB.collection('/Mexíco');
  }
  public getAmericana(){
return this.afDB.collection('/Americana');
  }
  public getChina(){
return this.afDB.collection('/China');}
    public getJapon(){
return this.afDB.collection('/Japonesa');
  }
  public getSalvador(){
return this.afDB.collection('/Salvadoreña');
  }
  public getCalientes(){
return this.afDB.collection('/Calientes');
  }
  public getFrias(){
return this.afDB.collection('/Frias');
  }
  public getAlcoholica(){
return this.afDB.collection('/Alcoholicas');
  }
  public getPostres(){
return this.afDB.collection('/Postres');
  }
  public getExtras(){
return this.afDB.collection('/Extras');
  }
  Img:any =[
    {url: './assets/contactos/correo.png' , string:'Cobepos@gmail.com'},
    {url: './assets/contactos/ubicación.png' , string:' - San Salvador  - Santa Tecla  - MetroCentro '},
    {url: './assets/contactos/telefono.png' , string:'7259-4339'}
  ];



  // Calientes:any = [
  //   { id: 1 , nombre:"Café", clasificacion: "Caliente", nacionalidad:"África",precio: "$ 1.75"  , url:'./assets/bebidas/calientes/cafe.jpg' },
  //   { id: 2 , nombre:"Chocolate", clasificacion: "Caliente", nacionalidad:"Mexico",precio: "$ 1.75", url:'./assets/bebidas/calientes/chocolate.jpg' },
  //   { id: 3 , nombre:"Té", clasificacion: "Caliente", nacionalidad:"China", precio: "$ 1.75" , url:'./assets/bebidas/calientes/té.jpg' },
  //   { id: 4 , nombre:"Capuchino", clasificacion: "Caliente", nacionalidad:"Italia",precio: "$ 2.50" , url:'./assets/bebidas/calientes/capuchino.jpg' }
  // ];
  // Frias:any = [
  //   { id: 1 , nombre:"Frozen", clasificacion: "Frias", nacionalidad:"Mexico",precio: "$ 2.50"  , url: './assets/bebidas/frias/Frozen.jpg'},
  //   { id: 2 , nombre:"Jugos naturales", clasificacion: "Frias", nacionalidad:"",precio: "$ 2", url: './assets/bebidas/frias/JugosNaturales.jpg'},
  //   { id: 3 , nombre:"Té frio", clasificacion: "Frias", nacionalidad:"China", precio: "$ 1.75" , url: './assets/bebidas/frias/te.jpg'},
  //   { id: 4 , nombre:"Licuados", clasificacion: "Fria", nacionalidad:"Argentina",precio: "$ 2.50" , url: './assets/bebidas/frias/lucuado.jpeg'}
  // ];
  // Alcolicas:any = [
  //   { id: 1 , nombre:"Vodka",  nacionalidad:"Rusia",precio: "$4.30"    ,url: './assets/bebidas/Alcoholicas/vodka.jpg' },
  //   { id: 2 , nombre:"Tequila",  nacionalidad:"Mexico",precio: "$5.50"  ,url: './assets/bebidas/Alcoholicas/Tequila.jpg '},
  //   { id: 3 , nombre:"Vino",  nacionalidad:"Italia", precio: "$5.25"   ,url: './assets/bebidas/Alcoholicas/vino.jpg '},
  //   { id: 4 , nombre:"Cervesa",  nacionalidad:"Egipto",precio: "$3.50"   ,url: './assets/bebidas/Alcoholicas/cerveza.png' },
  //   { id: 5 , nombre:"Ron",  nacionalidad:"Estados Unidos",precio: "$7.50"   ,url: './assets/bebidas/Alcoholicas/ron.jpg' }
  // ];
  // Postres:any = [
  //   { id: 1 , nombre:"Buñuelos de manzana", tipo: "Frito", especialidad:"5 Unidades",precio: "$ 7.50",url: './assets/postres/calientes/buñuelos.png' },
  //   { id: 2 , nombre:"Pie de helado de limón", tipo: "Helado", especialidad:" 1 Porción",precio: "$ 3.50"  ,url: './assets/postres/helado/HeladoLimon.jpg '},
  //   { id: 3 , nombre:"Tarta de Cafe", tipo: "Frio",  especialidad:" 1 Porción", precio: "$ 2.80"   ,url: './assets/postres/frios/TartaCafe.jpeg '},
  //   { id: 4 , nombre:"Brownie con helado de vainilla", tipo: "Helado", especialidad:" 1 Porción ",precio: "$3.50"   ,url: './assets/postres/helado/brownie.jpg' },
  //   { id: 5 , nombre:"Coulant de chocolate", tipo: "Caliente", especialidad:" 1 Porción ",precio: "$ 2.25"   ,url: './assets/postres/calientes/coulat.jpg' },
  //   { id: 6 , nombre:"Tiramisu", tipo: "Frio", especialidad:"1 Porción",precio: "$ 4.99"    ,url: './assets/postres/frios/tiramisu.jpg' },
  //   { id: 7 , nombre:"Tarta de queso", tipo: "Frio", especialidad:"1 Porción ",precio: "$ 3.50"  ,url: './assets/postres/frios/TartaQueso.jpg '},
  //   { id: 8 , nombre:"Banana Split", tipo: "Helado", especialidad:"1 Ración ", precio: "$ 2.80"   ,url: './assets/postres/helado/banana.jpg '},
  //   { id: 9 , nombre:"Castañas en almíbar de miel", tipo: "Calientes", especialidad:" 5 Unidades",precio: "$ 6.75"   ,url: './assets/postres/calientes/castaña.jpg' },
  //   { id: 10 , nombre:"Bombas fritas", tipo: "Frito", especialidad:" 3 Unidades",precio: "$ 3.75"   ,url: './assets/postres/fritos/bombaFrita.jpeg' },
  //   { id: 11, nombre:"Sorbete de mango", tipo: "Helado", especialidad:" 1 Porción",precio: "$ 3.20"    ,url: './assets/postres/helado/sorbrete-de-mango.jpg' },
  //   { id: 12 , nombre:"Pastel de manzana caliente", tipo: "Caliente", especialidad:"4 Unidades",precio: "$ 7.20"  ,url: './assets/postres/calientes/pastelManzana.jpg '},
  //   { id: 13, nombre:"Helado frito", tipo: "Frito", especialidad:" 1 Unidad", precio: "$ 4.20"   ,url: './assets/postres/fritos/helado-frito.jpg '},
  //   { id: 14, nombre:"Pancakes", tipo: "Caliente", especialidad:" 3 Unidades",precio: "$ 5.50"   ,url: './assets/postres/calientes/pancakes.jpg' },
  //   { id: 15 , nombre:"Leche frita ", tipo: "Frito", especialidad:" 4 Unidades",precio: "$ 5.50"   ,url: './assets/postres/fritos/leche-frita.jpg' },
  //   { id: 16 , nombre:"Rosquillas fritas", tipo: "Frito", especialidad:" 6",precio: "$ 4.75"   ,url: './assets/postres/fritos/rosquillas-fritas.jpg' }

  // ];
  // Extras:any = [
  //   { id: 1 , nombre:"Cebolla saltiada ", cantidad: "1 Ración", precio: "$ 3"   ,url: './assets/extras/cebolla.jpg '},
  //   { id: 2 , nombre:"Carpaccio de salmón", cantidad: "1 Ración",precio: "$9"  ,url: './assets/extras/Carpaccio.jpg '},
  //   { id: 3 , nombre:"Calamarin frito", cantidad: "6",precio: "$ 7"    ,url: './assets/extras/calamarin.jpg' },
  //   { id: 4 , nombre:"Ensalada fresca", cantidad: "1 Ración",precio: "$3"   ,url: './assets/extras/ensalada-fresca.jpg' },
  //   { id: 5 , nombre:"Ensalada de pollo", cantidad: "1",precio: "$3"   ,url: './assets/extras/ensaladaRepollo.png' },
  //   { id: 5 , nombre:"Galletas de la fortuna", cantidad: "2",precio: "$2"   ,url: './assets/extras/galletasFrotuna.jpg' },
  //   { id: 5 , nombre:"Guacamole.jpg", cantidad: "1 Ración",precio: "$2"   ,url: './assets/extras/guacamole.jpg' },
  //   { id: 5 , nombre:"Nuegados fritos", cantidad: "3",precio: "$1"   ,url: './assets/extras/NuegadosFritos.jpg' },
  //   { id: 5 , nombre:"Palitroque", cantidad: "5",precio: "$3"   ,url: './assets/extras/Palitroques.png' },
  //   { id: 5 , nombre:"Pan ", cantidad: "1",precio: "$0.75"   ,url: './assets/extras/Pan.jpg' },
  //   { id: 5 , nombre:"Pan con ajo", cantidad: "4",precio: "$5"   ,url: './assets/extras/pan_ajo.png' },
  //   { id: 5 , nombre:"Patatas", cantidad: "1 Ración",precio: "$2"   ,url: './assets/extras/patatas-fritas.jpg' },
  //   { id: 5 , nombre:"RollitosPrimavera.jpg", cantidad: "5",precio: "$4"   ,url: './assets/extras/rollitosPrimavera.jpg' },
  //   { id: 5 , nombre:"Tostaditas de maíz", cantidad: "5",precio: "$1"   ,url: './assets/extras/tostadas.jpg' },
  //   { id: 5 , nombre:"Wantán", cantidad: "12",precio: "$4"   ,url: './assets/extras/wantan-.jpg' }
  // ];





public getContactos(){
  return this.Img;
}

}
