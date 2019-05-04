import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  Ofertas:any = [
    {  id: 1, nombre:'Camarón Kung Pao' ,   precio: '$ 8' ,ingredientes:'Camarones grandes, salsa de soja, chiles secos, pimetón verde, jengibre ' , url:'./assets/china/camaron-kungp.jpg'},
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
    { id: 1 , nombre:"Costillas de cerdo al horno", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "2" ,  ingredientes:"Ricas costillas de cerdo con barbacoa , acompañado con unas papas salteadas " ,url:'./assets/'  },
    { id: 2 , nombre:" Hamburguesa", clasificacion: "Plato fuerte", precio: "$6.50", cantidad: "1" ,  ingredientes:"Carne de 150g, acompañada de papas fritas " ,url:'./assets/'  },
    { id: 3 , nombre:"Espaguetis con albóndigas ", clasificacion: "Plato fuerte", precio: "$7.50", cantidad: "1 Porción" ,  ingredientes:"Carne especiada, tomate , pasta larga" ,url:'./assets/'  },
    { id: 4 , nombre:"Alitas al estilo Buffalo", clasificacion: "Plato fuerte", precio: "$6.25", cantidad: "8" ,  ingredientes:" Alitas de pollo picantes al estilo Buffalo" ,url:'./assets/'  },
    { id: 5 , nombre:"Brownies", clasificacion: "Postre", precio: "$2.25", cantidad: "1 porción" ,  ingredientes:"Los brownies son unos dulces de chocolate que se cocinan en el horno" ,url:'./assets/'  },
    { id: 6 , nombre:"Bagels", clasificacion: "Plato fuerte", precio: "$5.20", cantidad: "1" ,  ingredientes:"Los brownies son unos dulces de chocolate que se cocinan en el horno" ,url:'./assets/'  },
    { id: 7 , nombre:"Ensalada coleslaw", clasificacion: "Platillo extra", precio: "$1.50", cantidad: "12 onzas" ,  ingredientes:"ensalada americana de col" ,url:'./assets/'  },
    { id: 8 , nombre:"Perritos calientes", clasificacion: "Plato fuerte", precio: "$1.50", cantidad: "1 " ,  ingredientes:"Salchicha de tipo Frankfurt repletos de condimentos y salsas" ,url:'./assets/'  },
    { id: 9 , nombre:"Ensala cesar", clasificacion: "Platillo extra", precio: "$4.50", cantidad: "1 porción" ,  ingredientes:"Camarrones, lechuga, queso parmesano, jugo de limón " ,url:'./assets/'  },
    { id: 10 , nombre:"Tarta de queso", clasificacion: "Postre", precio: "$1.20", cantidad: "1 porción" ,  ingredientes:"Queso Philadelphia, brick de 250 ml, mantequilla, mermelada de fresa " ,url:'./assets/'  }
  ];
  Francesa:any = [
    { id: 1 , nombre:"Tacos al pastor", clasificacion: "Plato fuerte", precio: "$5.50", cantidad: "6" ,  ingredientes:"Tortilla de maíz, piña, cebolla, cilantro, y dosis al gusto de limón y salsa picante. " ,url:'./assets/'  },
    { id: 2 , nombre:"Chilaquiles", clasificacion: "Plato fuerte", precio: "$6.50", cantidad: "1 porción" ,  ingredientes:"Trocitos de pan, caldo de carne y cebolla caramelizada " ,url:'./assets/'  },
    { id: 3 , nombre:"Chiles rellenos ", clasificacion: "Plato fuerte", precio: "$5.50", cantidad: "1 porción" ,  ingredientes:"Queso, carne, pollo, atún, pescados, mariscos cubiertos en salsa, gratinados o capeados" ,url:'./assets/'  },
    { id: 4 , nombre:"Tostadas", clasificacion: "Plato fuerte", precio: "$3.25", cantidad: "7" ,  ingredientes:" mariscos, carne molida, pollo, guacamole" ,url:'./assets/'  },
    { id: 5 , nombre:"Le foie gras", clasificacion: "Plato fuerte", precio: "$7.75", cantidad: "1 porción" ,  ingredientes:"hígado hipertrofiado de un pato o ganso" ,url:'./assets/'  },
    { id: 6 , nombre:"Les escargots de Bourgogne", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "10" ,  ingredientes:"Caracoles con mantequilla, perejil y salsa mayonesa de ajos" ,url:'./assets/'  },
    { id: 7 , nombre:"Les cuisses de grenouilles", clasificacion: "Plato fuerte", precio: "$9.50", cantidad: "1 porción" ,  ingredientes:"Champiñones, cebolla francesa , caldo de carne , verduras , vino tinto" ,url:'./assets/'  },
    { id: 8 , nombre:"Sopa de cebolla", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "12 onzas " ,  ingredientes:"Carne, cebolla caramelizada y trocitos de pan " ,url:'./assets/'  },
    { id: 9 , nombre:"Coq au vin", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "1 porción" ,  ingredientes:"Pollo/ternero ,cebolla troceada, vino tinto, perejil, laurel, tomillo fresco " ,url:'./assets/'  },
    { id: 10 , nombre:"Confit de pato", clasificacion: "Plato fuerte", precio: "$10.20", cantidad: "1 porción" ,  ingredientes:" Muslos de pato, o cuartos traseros, grasa de oca o manteca refinadas, sal gruesa " ,url:'./assets/'  }
  ];
  Mexicana:any = [
    { id: 1 , nombre:"Tacos al pastor", clasificacion: "Plato fuerte", precio: "$5.55", cantidad: "6" ,  ingredientes:"Tortilla de maíz, piña, cebolla, cilantro, y dosis al gusto de limón y salsa picante." ,url:'./assets/'  },
    { id: 2 , nombre:"Chilaquiles", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "1 porción" ,  ingredientes:"Pedazos de tortilla de maíz frita, salsa roja o verde, crema de leche, cebolla, queso blanco" ,url:'./assets/'  },
    { id: 3 , nombre:"Chiles rellenos", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "1 Porción" ,  ingredientes:"Queso, carne, pollo, atún, pescados, mariscos cubiertos en salsa, gratinados o capeados" ,url:'./assets/'  },
    { id: 4 , nombre:"Picadillo", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "1 porción" ,  ingredientes:"Carne molida entomatada cocida con cebolla, ajo, verduras picadas, especias y chiles" ,url:'./assets/'  },
    { id: 5 , nombre:"Sopa de tortilla", clasificacion: "Plato fuerte", precio: "$2.25", cantidad: "1 porción" ,  ingredientes:"Tomate, limón, chiles y otros ingredientes, más tajadas de aguacate, tiras de tortilla frita y crema de leche." ,url:'./assets/'  },
    { id: 6 , nombre:"Quesadillas", clasificacion: "Plato fuerte", precio: "$2.50", cantidad: "4" ,  ingredientes:"las quesadillas pueden ser de pollo, hongos, camarones, tortillas de maiz" ,url:'./assets/'  },
    { id: 7 , nombre:"Pozole rojo ", clasificacion: "Plato fuerte", precio: "$3.50", cantidad: "1 porción" ,  ingredientes:" sopa con granos de maíz extra-grandes, pollo o puerco, tiras de lechuga, rábano y orégano" ,url:'./assets/'  },
    { id: 8 , nombre:"RBirria", clasificacion: "Plato fuerte", precio: "$3.75", cantidad: "12 onzas" ,  ingredientes:" trozos de borrego cocidos en agua,chile" ,url:'./assets/'  },
    { id: 9 , nombre:"Tacos gobernador", clasificacion: "Plato fuerte", precio: "$6.25", cantidad: "3" ,  ingredientes:"camarones cocidos al estilo local  con queso y aguhacate " ,url:'./assets/'  },
    { id: 10 , nombre:"Menudo", clasificacion: "plato fuerte", precio: "$3.20", cantidad: "12 onzas " ,  ingredientes:"Caldo de panza de res, maíz y chiles" ,url:'./assets/'  }
  ];
  China:any = [
    { id: 1 , nombre:"Pollo Kung Pao", clasificacion: "Plato fuerte", precio: "$8.55", cantidad: "1" ,  ingredientes:"pechuga de pollo , salsa de soya , cebolletas, salasa hoisin, hojuelas de pimienta roja molida, pimiento rojo y verde  " ,url:'./assets/'  },
    { id: 2 , nombre:"Pollo en salsa de Fresa naranja ", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1" ,  ingredientes:" pechigas de pollo , naranja, maicena, caldo de pollo, salsa de soya  " ,url:'./assets/'  },
    { id: 3 , nombre:"Pollo con Almendras al estilo Chino ", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1 " ,  ingredientes:"Pechugas de pollo , almendras peladas, champiñones , pimiento verde, zanahoria,brotes de soya,salsa de soya  " ,url:'./assets/'  },
    { id: 4 , nombre:"Lomito de Res al Estilo Mongolia", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "1" ,  ingredientes:"carne de res, salsa de soya, cebolla, gengibre, brócoli, brotes de soya   " ,url:'./assets/'  },
    { id: 5 , nombre:"Lomito de Res con Champiñones", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "1 " ,  ingredientes:"Lomito de res, salsa de soya, salsa hoisin, champiñones, brócoli, cebolla  " ,url:'./assets/'  },
    { id: 6 , nombre:"Lomito de Res con Semilla de Marañon", clasificacion: "Plato fuerte", precio: "$8.20", cantidad: "1" ,  ingredientes:"Lomito de res, apio, cebolla, chile dulce, brócoli, ron" ,url:'./assets/'  },
    { id: 7 , nombre:"Camarón Kung Pao ", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1" ,  ingredientes:"Camarones grandes, salsa de soja, chiles secos, pimetón verde, jengibre  " ,url:'./assets/'  },
    { id: 8 , nombre:"Filete de Pescado en Salsa Agridulce", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1 " ,  ingredientes:"Filete de pescado blanco, rajas rojas de jalapeño, salsa negra, cebolla morada " ,url:'./assets/'  },
    { id: 9 , nombre:" Lomito de Cerdo en Salsa Agridulc", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "1 " ,  ingredientes:"Magra de cerdo, pimentón verde y rojo, brotes de bambú, cebolla, caldo de carne, salsa de soya" ,url:'./assets/'  },
    { id: 10 , nombre:"Chow mein con vegetales", clasificacion: "Postre", precio: "$8.20", cantidad: "1 " ,  ingredientes:"pollo, carne de res, vegetales, salsa de soya, fideos, retoño de soya,  " ,url:'./assets/'  }
  ];
  Japonesa:any = [
    { id: 1 , nombre:"Tampopo ramen,", clasificacion: "Plato fuerte", precio: "$8.25", cantidad: "1 " ,  ingredientes:" Fideos chuka soba, caldo de ramen, chtsu, bambú, alga nori, naruto, maiz dulce, sésamo blanco y tostado  " ,url:'./assets/'  },
    { id: 2 , nombre:"Tempura", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "6" ,  ingredientes:"Langostinos grades, alga kombu, salsa de soya  " ,url:'./assets/'  },
    { id: 3 , nombre:"Nigiri ", clasificacion: "Platillo fuerte", precio: "$7.50", cantidad: "5" ,  ingredientes:"Pez matequilla, arros, cebolla china, chorrito de sake, salsa de soya, aceite de cilantro, algas kombú " ,url:'./assets/'  },
    { id: 4 , nombre:"Tataki de atún", clasificacion: "Plato fuerte", precio: "$7.25", cantidad: "5" ,  ingredientes:"Lomo de atún rojo fresco, salsa de soya, vinagre de arroz, semillas de sesámo, jengibre en polvo " ,url:'./assets/'  },
    { id: 5 , nombre:"Uramaki", clasificacion: "Plato fuerte", precio: "$8.75", cantidad: "5" ,  ingredientes:"Tira de calabacín, tira de pepino, mayonesa wasabi, lechuga, arroz shari, lámina de nori, sésamo blanco y negro " ,url:'./assets/'  },
    { id: 6 , nombre:"Sashimi", clasificacion: "Plato fuerte", precio: "$15.50", cantidad: "10" ,  ingredientes:"Atún fresco, salmón fresco, pasta de wasabi, aceite de sésamo, salsa de soya,  " ,url:'./assets/'  },
    { id: 7 , nombre:"Harumaki ", clasificacion: "Plato fuerte", precio: "$9.50", cantidad: "5" ,  ingredientes:"Carne de cerdo, brotes de soja, trozos bambú hervido, setas shiitake, harusame, caldo de pollo, sake, evolturasde roollo de primavera  " ,url:'./assets/'  },
    { id: 8 , nombre:"Hako sushi", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "7 " ,  ingredientes:"Gambas, salmón fresco, arroz de grano gordo, vinegrede arroz, furikake, tobiko, jengibre gari " ,url:'./assets/'  },
    { id: 9 , nombre:"Chirashizushi ", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "1 " ,  ingredientes:"Arroz, vinagre de arroz, atún fresco, salmón fresco, langostino, huevo gari, salsa wasabi, salsa de soya   " ,url:'./assets/'  },
    { id: 10 , nombre:"Tonkatsu ", clasificacion: "Plato fuerte", precio: "$8.20", cantidad: "1 " ,  ingredientes:" Chuletas de cerdo, panko, pimienta, harina, huevo" ,url:'./assets/'  }
  ];
  Salvadoreña:any = [
    { id: 1 , nombre:"Le gratin dauphinois", clasificacion: "Plato fuerte", precio: "$12", cantidad: "1 porción" ,  ingredientes:"Plato horneado de patatas gratinadas cortadas en finas rodajas y mezcladas con nata fresca o leche. " ,url:'./assets/'  },
    { id: 2 , nombre:"La soupe à l’oignons", clasificacion: "Plato fuerte", precio: "$6.50", cantidad: "12 onzas" ,  ingredientes:"Trocitos de pan, caldo de carne y cebolla caramelizada " ,url:'./assets/'  },
    { id: 3 , nombre:"La ratatouille ", clasificacion: "Platillo extra", precio: "$5.50", cantidad: "12 onzas" ,  ingredientes:"Mezcla tomates, ajos, pimientos, calabacín, y berenjenas con diversas hierbas provenzales" ,url:'./assets/'  },
    { id: 4 , nombre:"Moules frites", clasificacion: "Plato fuerte", precio: "$10.25", cantidad: "1 porción" ,  ingredientes:"Mejillones y patatas fritas con salsas de cebolla y de queso" ,url:'./assets/'  },
    { id: 5 , nombre:"Le foie gras", clasificacion: "Plato fuerte", precio: "$7.75", cantidad: "1 porción" ,  ingredientes:"hígado hipertrofiado de un pato o ganso" ,url:'./assets/'  },
    { id: 6 , nombre:"Les escargots de Bourgogne", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "10" ,  ingredientes:"Caracoles con mantequilla, perejil y salsa mayonesa de ajos" ,url:'./assets/'  },
    { id: 7 , nombre:"Les cuisses de grenouilles", clasificacion: "Plato fuerte", precio: "$9.50", cantidad: "1 porción" ,  ingredientes:"Champiñones, cebolla francesa , caldo de carne , verduras , vino tinto" ,url:'./assets/'  },
    { id: 8 , nombre:"Sopa de cebolla", clasificacion: "Plato fuerte", precio: "$8.50", cantidad: "12 onzas " ,  ingredientes:"Carne, cebolla caramelizada y trocitos de pan, " ,url:'./assets/'  },
    { id: 9 , nombre:"Coq au vin", clasificacion: "Plato fuerte", precio: "$10.50", cantidad: "1 porción" ,  ingredientes:"Pollo/ternero ,cebolla troceada, vino tinto, perejil, laurel, tomillo fresco " ,url:'./assets/'  },
    { id: 10 , nombre:"Confit de pato", clasificacion: "Plato fuerte", precio: "$10.20", cantidad: "1 porción" ,  ingredientes:" Muslos de pato, o cuartos traseros, grasa de oca o manteca refinadas, sal gruesa " ,url:'./assets/'  }
  ];
public getPlatos(){
  return this.Ofertas;
}
public getItalia(){
  return this.Italia;
}

}
