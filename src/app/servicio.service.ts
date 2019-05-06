import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  Ofertas:any = [
    {  id: 1, nombre:'Camarón Kung Pao' ,   precio: '$8' ,ingredientes:'Camarones grandes, salsa de soja, chiles secos, pimetón verde, jengibre ' , url:'./assets/china/camaron-kungp.jpg'},
    { id:2 , nombre:'Sopa de cebolla ' ,  precio: '$ 6' ,ingredientes:'Cebolla caramelizada, carne de res  y trocitos de pan ',url:'./assets/francia/Sopa-de-cebolla.jpg' },
    { id: 3, nombre:'Lasaña' ,  precio: '$ 3' ,ingredientes:'Champiñones, carne picada, calabacín grande,salsa de tomate y leche"',url:'./assets/comida/italiana1.jpg' }
  ];

  Italia:any = [
    { id: 1 , nombre:"Bruschetta", clasificacion: "Entrada", precio: "$6.55", cantidad: "5" ,  ingredientes:"Baquetas francesas con queso mozzarela con una deliciosa salsa de tomate acompañada de unas hojitas de albahaca" ,url:'./assets/italia/Bruschetta.jpeg'  },
    { id: 2 , nombre:"Berenjenas a la parmesana", clasificacion: "Plato fuerte", precio: "$15", cantidad: "2" ,  ingredientes:"Rodajas de berenjena , queso parmesado, queso mozzarela, salsa de tomate" ,url:'./assets/italia/berenjena.jpg'  },
    { id: 3 , nombre:"Lasaña", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "1 Porción" ,  ingredientes:"Champiñones, carne picada, calabacín grande,salsa de tomate y leche" ,url:'./assets/italia/lasaña.jpg'  },
    { id: 4 , nombre:"Canelones", clasificacion: "Plato fuerte", precio: "$5.65", cantidad: "8" ,  ingredientes:"Espinaca,pasas,piñones,leche" ,url:'./assets/italia/canelones.jpg'  },
    { id: 5 , nombre:"Ravioli", clasificacion: "Entrada", precio: "$6.25", cantidad: "10" ,  ingredientes:"Quesso,ricotta,salsa de tomate,tomillo fresco, Albahaca" ,url:'./assets/italia/ravioli.jpg'  },
    { id: 6 , nombre:"Panzerotti", clasificacion: "Entrada", precio: "$5.50", cantidad: "6" ,  ingredientes:"Queso mozzarela , salsa de tomate apuliano, orégano" ,url:'./assets/italia/Panzerotti.jpg'  },
    { id: 7 , nombre:"Espaguetis", clasificacion: "Plato fuerte", precio: "$7.50", cantidad: "1 porción" ,  ingredientes:"Salmón ahumado,romero,salsa de tomate ,cebolla salteada" ,url:'./assets/italia/espaguetis.jpg'  },
    { id: 8 , nombre:"Risotto agli spinaci", clasificacion: "Platillo extra", precio: "$3.75", cantidad: "1 porción" ,  ingredientes:"Espinaca, queso parmesano, guindilla, cebolla" ,url:'./assets/italia/Risotto.jpg'  },
    { id: 9 , nombre:"Pizza marinara", clasificacion: "Plato fuerte", precio: "$10", cantidad: "8 porciones" ,  ingredientes:"Tomate, orégano" ,url:'./assets/italia/Pizza.jpg'  },
    { id: 10 , nombre:"Calzone", clasificacion: "Entrada", precio: "$4.20", cantidad: "2 porciones" ,  ingredientes:"Queso mozzarella, ricotta, parmesano " ,url:'./assets/italia/Calzone.jpg'  }
  
];
  Americana:any = [
    { id: 1 , nombre:"Costillas de cerdo al horno", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "2" ,  ingredientes:"Ricas costillas de cerdo con barbacoa , acompañado con unas papas salteadas " ,url:'./assets/americana/costillas.jpg'  },
    { id: 2 , nombre:" Hamburguesa", clasificacion: "Plato fuerte", precio: "$6.50", cantidad: "1" ,  ingredientes:"Carne de 150g, acompañada de papas fritas " ,url:'./assets/americana/hamburguesa.png'  },
    { id: 3 , nombre:"Espaguetis con albóndigas ", clasificacion: "Plato fuerte", precio: "$7.50", cantidad: "1 Porción" ,  ingredientes:"Carne especiada, tomate , pasta larga" ,url:'./assets/americana/spaguetis.jpg'  },
    { id: 4 , nombre:"Alitas al estilo Buffalo", clasificacion: "Plato fuerte", precio: "$6.25", cantidad: "8" ,  ingredientes:" Alitas de pollo picantes al estilo Buffalo" ,url:'./assets/americana/Alitas.jpg'  },
    { id: 5 , nombre:"Brownies", clasificacion: "Postre", precio: "$2.25", cantidad: "1 porción" ,  ingredientes:"Los brownies son unos dulces de chocolate que se cocinan en el horno" ,url:'./assets/americana/Brownies.jpg'  },
    { id: 6 , nombre:"Bagels", clasificacion: "Plato fuerte", precio: "$5.20", cantidad: "1" ,  ingredientes:"Los brownies son unos dulces de chocolate que se cocinan en el horno" ,url:'./assets/americana/bagel.jpg'  },
    { id: 7 , nombre:"Ensalada coleslaw", clasificacion: "Platillo extra", precio: "$1.50", cantidad: "12 onzas" ,  ingredientes:"ensalada americana de col" ,url:'./assets/americana/coleslaw.jpg'  },
    { id: 8 , nombre:"Perritos calientes", clasificacion: "Plato fuerte", precio: "$1.50", cantidad: "1 " ,  ingredientes:"Salchicha de tipo Frankfurt repletos de condimentos y salsas" ,url:'./assets/americana/hotDot.jpg'  },
    { id: 9 , nombre:"Ensala cesar", clasificacion: "Platillo extra", precio: "$4.50", cantidad: "1 porción" ,  ingredientes:"Camarrones, lechuga, queso parmesano, jugo de limón " ,url:'./assets/americana/ensalada.jpg ' },
    { id: 10 , nombre:"Tarta de queso", clasificacion: "Postre", precio: "$1.20", cantidad: "1 porción" ,  ingredientes:"Queso Philadelphia, brick de 250 ml, mantequilla, mermelada de fresa " ,url:'./assets/americana/tarta.jpg'  }
  ];
  Francesa:any = [
    { id: 1 , nombre:"Gratin dauphinois", clasificacion: "Plato fuerte", precio: "$7.50", cantidad: "1" ,  ingredientes:"Patatas, ajo,leche,mantequilla,nuez mozcada " ,url:'./assets/francia/dauphinois.jpg'  },
    { id: 2 , nombre:"Moules frites", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1 porción" ,  ingredientes:"Mejillones, apio, cebolla,vino blanco, mantequilla, patatas" ,url:'./assets/francia/Moules-frites.jpg'  },
    {id: 3 , nombre:"Le foie gras", clasificacion: "Plato fuerte", precio: "$7.75", cantidad: "1 porción" ,  ingredientes:"hígado hipertrofiado de un pato o ganso" ,url:'./assets/francia/foie.jpg'  },
    { id: 4 , nombre:"Les escargots de Bourgogne", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "10" ,  ingredientes:"Caracoles con mantequilla, perejil y salsa mayonesa de ajos" ,url:'./assets/francia/Bourgogne.jpg'  },
    { id: 5 , nombre:"Les cuisses de grenouilles", clasificacion: "Plato fuerte", precio: "$9.50", cantidad: "1 porción" ,  ingredientes:"Champiñones, cebolla francesa , caldo de carne , verduras , vino tinto" ,url:'./assets/francia/cuisses-grenouilles.jpeg'  },
    { id: 6 , nombre:"Sopa de cebolla", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "12 onzas " ,  ingredientes:"Carne, cebolla caramelizada y trocitos de pan " ,url:'./assets/francia/Sopa-de-cebolla.jpg'  },
    { id: 7 , nombre:"Coq au vin", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "1 porción" ,  ingredientes:"Pollo/ternero ,cebolla troceada, vino tinto, perejil, laurel, tomillo fresco " ,url:'./assets/francia/coq-au-vin-recipe.jpg'  },
    { id: 8 , nombre:"Confit de pato", clasificacion: "Plato fuerte", precio: "$10.20", cantidad: "1 porción" ,  ingredientes:" Muslos de pato, o cuartos traseros, grasa de oca o manteca refinadas, sal gruesa " ,url:'./assets/francia/Confit-de-pato.jpg'  }
  ];
  Mexicana:any = [
    { id: 1 , nombre:"Tacos al pastor", clasificacion: "Plato fuerte", precio: "$5.55", cantidad: "6" ,  ingredientes:"Tortilla de maíz, piña, cebolla, cilantro, y dosis al gusto de limón y salsa picante." ,url:'./assets/mexicana/tacos-pastor.jpg'  },
    { id: 2 , nombre:"Chilaquiles", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "1 porción" ,  ingredientes:"Pedazos de tortilla de maíz frita, salsa roja o verde, crema de leche, cebolla, queso blanco" ,url:'./assets/mexicana/chileaquiles.jpg'  },
    { id: 3 , nombre:"Chiles rellenos", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "1 Porción" ,  ingredientes:"Queso, carne, pollo, atún, pescados, mariscos cubiertos en salsa, gratinados o capeados" ,url:'./assets/mexicana/chile-relleno.jpg'  },
    { id: 4 , nombre:"Picadillo", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "1 porción" ,  ingredientes:"Carne molida entomatada cocida con cebolla, ajo, verduras picadas, especias y chiles" ,url:'./assets/mexicana/picado.jpg'  },
    { id: 5 , nombre:"Sopa de tortilla", clasificacion: "Plato fuerte", precio: "$2.25", cantidad: "1 porción" ,  ingredientes:"Tomate, limón, chiles y otros ingredientes, más tajadas de aguacate, tiras de tortilla frita y crema de leche." ,url:'./assets/mexicana/sopa-de-tortilla.jpg'  },
    { id: 6 , nombre:"Quesadillas", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "4" ,  ingredientes:"las quesadillas pueden ser de pollo, hongos, camarones, tortillas de maiz" ,url:'./assets/mexicana/quesadillas.jpg'  },
    { id: 7 , nombre:"Pozole rojo ", clasificacion: "Plato fuerte", precio: "$3.50", cantidad: "1 porción" ,  ingredientes:" sopa con granos de maíz extra-grandes, pollo o puerco, tiras de lechuga, rábano y orégano" ,url:'./assets/mexicana/pozole-rojo.jpg'  },
    { id: 8 , nombre:"RBirria", clasificacion: "Plato fuerte", precio: "$3.75", cantidad: "12 onzas" ,  ingredientes:" trozos de borrego cocidos en agua,chile" ,url:'./assets/mexicana/birria.jpg'  },
    { id: 9 , nombre:"Tacos gobernador", clasificacion: "Plato fuerte", precio: "$6.25", cantidad: "3" ,  ingredientes:"camarones cocidos al estilo local  con queso y aguhacate " ,url:'./assets/mexicana/tacos-gobernador-receta.jpg'  },
    { id: 10 , nombre:"Menudo", clasificacion: "plato fuerte", precio: "$3.20", cantidad: "12 onzas " ,  ingredientes:"Caldo de panza de res, maíz y chiles" ,url:'./assets/mexicana/menudo.jpg'  }
  ];
  China:any = [
    { id: 1 , nombre:"Pollo Kung Pao", clasificacion: "Plato fuerte", precio: "$8.55", cantidad: "1" ,  ingredientes:"pechuga de pollo , salsa de soya , cebolletas, salasa hoisin, hojuelas de pimienta roja molida, pimiento rojo y verde  " ,url:'./assets/china/polloKungpao.jpg'  },
    { id: 2 , nombre:"Pollo en salsa de Fresa naranja ", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1" ,  ingredientes:" pechigas de pollo , naranja, maicena, caldo de pollo, salsa de soya  " ,url:'./assets/china/roja.jpeg'  },
    { id: 3 , nombre:"Pollo con Almendras al estilo Chino ", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1 " ,  ingredientes:"Pechugas de pollo , almendras peladas, champiñones , pimiento verde, zanahoria,brotes de soya,salsa de soya  " ,url:'./assets/china/pollo-almendras.jpg'  },
    { id: 4 , nombre:"Lomito de Res al Estilo Mongolia", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "1" ,  ingredientes:"carne de res, salsa de soya, cebolla, gengibre, brócoli, brotes de soya   " ,url:'./assets/china/lomito.jpg'  },
    { id: 5 , nombre:"Lomito de Res con Champiñones", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "1 " ,  ingredientes:"Lomito de res, salsa de soya, salsa hoisin, champiñones, brócoli, cebolla  " ,url:'./assets/china/carne_champiñones.jpg'  },
    { id: 6 , nombre:"Lomito de Res con Semilla de Marañon", clasificacion: "Plato fuerte", precio: "$8.20", cantidad: "1" ,  ingredientes:"Lomito de res, apio, cebolla, chile dulce, brócoli, ron" ,url:'./assets/china/carne-cemillas.jpg'  },
    { id: 7 , nombre:"Camarón Kung Pao ", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1" ,  ingredientes:"Camarones grandes, salsa de soja, chiles secos, pimetón verde, jengibre  " ,url:'./assets/china/camaron-kungp.jpg'  },
    { id: 8 , nombre:"Filete de Pescado en Salsa Agridulce", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1 " ,  ingredientes:"Filete de pescado blanco, rajas rojas de jalapeño, salsa negra, cebolla morada " ,url:'./assets/china/filete-pescado.jpg'  },
    { id: 9 , nombre:" Lomito de Cerdo en Salsa Agridulc", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1 " ,  ingredientes:"Magra de cerdo, pimentón verde y rojo, brotes de bambú, cebolla, caldo de carne, salsa de soya" ,url:'./assets/china/cerdo.JPG'  },
    { id: 10 , nombre:"Chow mein con vegetales", clasificacion: "Postre", precio: "$8.20", cantidad: "1 " ,  ingredientes:"pollo, carne de res, vegetales, salsa de soya, fideos, retoño de soya,  " ,url:'./assets/china/chao-main.jpg'  }
  ];
  Japonesa:any = [
    { id: 1 , nombre:"Tampopo ramen,", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "1 " ,  ingredientes:" Fideos chuka soba, caldo de ramen, chtsu, bambú, alga nori, naruto, maiz dulce, sésamo blanco y tostado  " ,url:'./assets/japonesa/ramen_slide.jpg'  },
    { id: 2 , nombre:"Tempura", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "6" ,  ingredientes:"Langostinos grades, alga kombu, salsa de soya  " ,url:'./assets/japonesa/tempura.jpg'  },
    { id: 3 , nombre:"Nigiri ", clasificacion: "Platillo fuerte", precio: "$7.50", cantidad: "5" ,  ingredientes:"Pez matequilla, arros, cebolla china, chorrito de sake, salsa de soya, aceite de cilantro, algas kombú " ,url:'./assets/japonesa/Oshi-sushi-2.jpg'  },
    { id: 4 , nombre:"Tataki de atún", clasificacion: "Plato fuerte", precio: "$7.25", cantidad: "5" ,  ingredientes:"Lomo de atún rojo fresco, salsa de soya, vinagre de arroz, semillas de sesámo, jengibre en polvo " ,url:'./assets/japonesa/tataki-bueno.jpg'  },
    { id: 5 , nombre:"Uramaki", clasificacion: "Plato fuerte", precio: "$8.75", cantidad: "5" ,  ingredientes:"Tira de calabacín, tira de pepino, mayonesa wasabi, lechuga, arroz shari, lámina de nori, sésamo blanco y negro " ,url:'./assets/japonesa/Uramaki-vegetariano.jpg'  },
    { id: 6 , nombre:"Sashimi", clasificacion: "Plato fuerte", precio: "$15.50", cantidad: "10" ,  ingredientes:"Atún fresco, salmón fresco, pasta de wasabi, aceite de sésamo, salsa de soya,  " ,url:'./assets/japonesa/sashimi1.jpg'  },
    { id: 7 , nombre:"Harumaki ", clasificacion: "Plato fuerte", precio: "$9.50", cantidad: "5" ,  ingredientes:"Carne de cerdo, brotes de soja, trozos bambú hervido, setas shiitake, harusame, caldo de pollo, sake, evolturasde roollo de primavera  " ,url:'./assets/japonesa/harumaki.jpg'  },
    { id: 8 , nombre:"Hako sushi", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "7 " ,  ingredientes:"Gambas, salmón fresco, arroz de grano gordo, vinegrede arroz, furikake, tobiko, jengibre gari " ,url:'./assets/japonesa/sushi.gif'  },
    { id: 9 , nombre:"Chirashizushi ", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "1 " ,  ingredientes:"Arroz, vinagre de arroz, atún fresco, salmón fresco, langostino, huevo gari, salsa wasabi, salsa de soya   " ,url:'./assets/japonesa/chirashi.jpg'  },
    { id: 10 , nombre:"Tonkatsu ", clasificacion: "Plato fuerte", precio: "$8.20", cantidad: "1 " ,  ingredientes:" Chuletas de cerdo, panko, pimienta, harina, huevo" ,url:'./assets/japonesa/Tonkatsu.jpg'  }
  ];
  Salvadoreña:any = [
    { id: 1 , nombre:"Pusasas", clasificacion: "Plato fuerte", precio: "$0.75", cantidad: "1" ,  ingredientes:"Chicharón, queso, frijoles " ,url:'./assets/salvador/pupusas.jpg'  },
    { id: 2 , nombre:"Tamales elotes", clasificacion: "Plato fuerte", precio: "$1.00", cantidad: "12 onzas" ,  ingredientes:"Trocitos de pan, caldo de carne y cebolla caramelizada " ,url:'./assets/salvador/tamalesElotes.jpg'  },
    { id: 3 , nombre:"Yuca frita", clasificacion: "Platillo extra", precio: "$2.50", cantidad: "12 onzas" ,  ingredientes:"Mezcla tomates, ajos, pimientos, calabacín, y berenjenas con diversas hierbas provenzales" ,url:'./assets/salvador/yucaFrita.jpeg'  },
    { id: 4 , nombre:"Riguas", clasificacion: "Plato fuerte", precio: "$2.00", cantidad: "1 porción" ,  ingredientes:"Mejillones y patatas fritas con salsas de cebolla y de queso" ,url:'./assets/salvador/riguas.jpg'  },
    { id: 5 , nombre:"Nuegados masa/yuca", clasificacion: "Plato fuerte", precio: "$3", cantidad: "4" ,  ingredientes:"hígado hipertrofiado de un pato o ganso" ,url:'./assets/salvador/nuegados.jpg'  },
    { id: 6 , nombre:"Tamales pollo", clasificacion: "Plato fuerte", precio: "$5", cantidad: "3" ,  ingredientes:"Caracoles con mantequilla, perejil y salsa mayonesa de ajos" ,url:'./assets/salvador/tamalesPollo.jpg'  },
    { id: 7 , nombre:"Pasteles", clasificacion: "Plato fuerte", precio: "$5", cantidad: "3" ,  ingredientes:"Champiñones, cebolla francesa , caldo de carne , verduras , vino tinto" ,url:'./assets/salvador/pasteles.jpg'  },
    { id: 8 , nombre:"Torejas", clasificacion: "Plato fuerte", precio: "$2", cantidad: "1 " ,  ingredientes:"Carne, cebolla caramelizada y trocitos de pan, " ,url:'./assets/salvador/torrejas.jpg'  },
    { id: 9 , nombre:"Enpanadas", clasificacion: "Plato fuerte", precio: "$1", cantidad: "1" ,  ingredientes:"Pollo/ternero ,cebolla troceada, vino tinto, perejil, laurel, tomillo fresco " ,url:'./assets/salvador/enpanadas.jpg'  },
    { id: 10 , nombre:"Canoas", clasificacion: "Plato fuerte", precio: "$1", cantidad: "1" ,  ingredientes:" Muslos de pato, o cuartos traseros, grasa de oca o manteca refinadas, sal gruesa " ,url:'./assets/salvador/canoas.JPG'  }
  ];
  Calientes:any = [
    { id: 1 , nombre:"Café", clasificacion: "Caliente", nacionalidad:"",precio: "$"  , url:'./assets/bebidas/calientes/cafe.jpg' },
    { id: 2 , nombre:"Chocolate", clasificacion: "Caliente", nacionalidad:"",precio: "$", url:'./assets/bebidas/calientes/chocolate.jpg' },
    { id: 3 , nombre:"Té", clasificacion: "Caliente", nacionalidad:"", precio: "$" , url:'./assets/bebidas/calientes/té.jpg' },
    { id: 4 , nombre:"Capuchino", clasificacion: "Caliente", nacionalidad:"",precio: "$" , url:'./assets/bebidas/calientes/capuchino.jpg' }
  ];
  Frias:any = [
    { id: 1 , nombre:"Frozen", clasificacion: "Frias", nacionalidad:"",precio: "$"  , url: './assets/bebidas/frias/Frozen.jpg'},
    { id: 2 , nombre:"Jugos naturales", clasificacion: "Frias", nacionalidad:"",precio: "$", url: './assets/bebidas/frias/JugosNaturales.jpg'},
    { id: 3 , nombre:"Té frio", clasificacion: "Frias", nacionalidad:"", precio: "$" , url: './assets/bebidas/frias/te.jpg'},
    { id: 4 , nombre:"Licuados", clasificacion: "Frias", nacionalidad:"",precio: "$" , url: './assets/bebidas/frias/lucuado.jpeg'}
  ];
  Alcolicas:any = [
    { id: 1 , nombre:"Vodka", clasificacion: "Alcolicas", nacionalidad:"Rusia",precio: "$5"    ,url: './assets/bebidas/Alcoholicas/vodka.jpg' },
    { id: 2 , nombre:"Tequila", clasificacion: "Alcolicas", nacionalidad:"Mexico",precio: "$"  ,url: './assets/bebidas/Alcoholicas/Tequila.jpg '},
    { id: 3 , nombre:"Vino", clasificacion: "Alcolicas", nacionalidad:"Italia", precio: "$"   ,url: './assets/bebidas/Alcoholicas/vino.jpg '},
    { id: 4 , nombre:"Cervesa", clasificacion: "Alcolicas", nacionalidad:"Egipto",precio: "$"   ,url: './assets/bebidas/Alcoholicas/cerveza.png' },
    { id: 5 , nombre:"Smirnoff", clasificacion: "Alcolicas", nacionalidad:"Estados Unidos",precio: "$"   ,url: './assets/bebidas/Alcoholicas/smirno.jpg' }
  ];


public getPlatos(){
  return this.Ofertas;
}
public getItalia(){
  return this.Italia;
}
public getFrancia(){
  return this.Francesa;
}
public getMexico(){
  return this.Mexicana;
}
public getAmericana(){
  return this.Americana;
}
public getChina(){
  return this.China;
}
public getJapon(){
  return this.Japonesa;
}
public getSalvador(){
  return this.Salvadoreña;
}
public getCalientes(){
  return this.Calientes;
}
public getFrias(){
  return this.Frias;
}
public getAlcoholica(){
  return this.Alcolicas;
}
}
