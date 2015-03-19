var jsonD=[
	{
    "id":1,
    "nombreP":"MIRA",
    "imagen":"/images/MIRA.jpeg",
    "video":"https://www.youtube.com/watch?v=eXs7Fff7H8M",
    "descripcion1":"Mira es el nuevo alimento balanceado que Bayer ha desarrollado para la completa nutrición de perros y gatos y la satisfacción de sus amos.",
    "descripcion2":"La alimentación es el primer y más importante paso en el cuidado de la salud de las mascotas. Por eso, un buen alimento es clave en su rutina diaria y debemos prestarle especial atención a la selección de qué producto ofrecerles.",
    "descripcion3":"La fórmula única de Mira ha sido desarrollada pensando en las necesidades específicas de las mascotas, fabricado con la más alta tecnología y seguridad, teniendo como fin el cuidado integral de su salud, con un alto aporte energético, formulado con ingredientes de excelente calidad, excelente sabor y digestibilidad, Mira es todo lo que tu mascota necesita para mantenerse saludable, activa y feliz."
    
  },
  {
    "id":2,
    "nombreP":"Aspirina",
    "imagen":"/images/bay-aspirin.jpeg",
    "video":"https://www.youtube.com/watch?v=gIEnRiwtB9M",
    "descripcion1":"Aspirina es la marca número uno de Bayer desde hace mucho tiempo, y tiene el privilegio de mantenerse siempre presente en la mente del consumidor mexicano. Cuando la gente escucha “Aspirina”, inmediatamente la relaciona con la enorme tradición, calidad y prestigio que respaldan a Bayer.",
    "descripcion2":"A familia de Aspirina está conformada por cuatro productos que, aunque tienen una fórmula similar, cada uno está posicionado para el alivio eficaz de algún padecimiento en particular.",
    "descripcion3":"Aspirina. Comprimidos de 500mg de ácido acetilsalicílico, indicada para aliviar los tradicionales dolores de cabeza y musculares. Cuenta con presentaciones de 40 y 100 comprimidos.Aspirina efervescente. Tabletas de 500mg de ácido acetilsalicílico en formato efervescente. Además de aliviar los dolores, está indicada para combatir los primeros síntomas de la gripa. Se comercializa en presentaciones de 12 y 60 unidades.Cafiaspirina. Comprimidos de 500mg de ácido acetilsalicílico y 30mg de cafeína. Alivia dolores de cabeza muy fuertes o migraña, y gracias a la cafeína que contiene, se potencializa la rapidez del alivio, además de que reanima el cuerpo. Presentación de 40 y 100 comprimidos."
    
  },
  {
    "id":3,
    "nombreP":"Baytril",
    "imagen":"/images/baytril.jpeg",
    "video":"https://www.youtube.com/watch?v=5Ok5dfDOqTk",
    "descripcion1":"Es un antimicrobiano de amplio espectro para el tratamiento de las enfermedades bacterianas y micoplásmicas de las aves, que viene listo para administrarse en el agua de bebida.",
    "descripcion2":"La sustancia activa de Baytril® sintetizada por Bayer AG, es inhibidora de la girasa, por lo que su mecanismo de acción es diferente al de antibióticos comunes empleados en Medicina Veterinaria.",
    "descripcion3":"Baytrjil® 10% Solución Oral se caracteriza por inhibir la acción enzimática de las topoisomerasas que actúan a nivel del ADN nuclear durante su replicación, transcripción, recombinación y mecanismos de reparación, provocando un efecto bactericida."
    
  }
];


///modelado del listview
var secciones=[];

var primeraSeccion=Ti.UI.createListSection({
	headerTitle:'Primera',
});
var primeraData=[{properties: { title: 'Cod', searchableText:'Fish Cod', itemId:'2 0'}}];

var segundaSeccion=Ti.UI.createListSection({
	headerTitle:'Segunda',
});


primeraSeccion.setItems(primeraData);



//creacion de un list view dinamico

//@datadinamica es el equivalente al arreglo contenedor de los elementos o items
var dataDinamica=[];
/*	declarar previamnete al for, o ciclo while variables que contengan la informacion de las propiedades del listItem
 * 
 */
//@titulos,@palBusqueda,@itemDid corresponden respectivamente a las propeidades del template para el listItem
var titulos;
var palBusqueda;
var itemDid;
for(i=0;i<jsonD.length;i++){
	//se asignan valores a las variables previamente definidas
	titulos=jsonD[i].nombreP;
	palBusqueda=jsonD[i].nombreP;
	itemDid=jsonD[i].id;
	
	//definir el esquema de propeidades del elemento usando las variables ya actualizadas  o asignarlas directamente al esquema
	//se asignan los elementos al arreglo @dataDinamica
	dataDinamica.push({
		properties: { title:jsonD[i].nombreP, searchableText:titulos+" "+itemDid, itemId:itemDid,color:'red',image:'/images/default.png',accessoryType:
Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,backgroundColor:'white'}
	});
}

//se asignan los items de la seccion con los elemetos creados en dataDinamica
segundaSeccion.setItems(dataDinamica);


//se añaden las secciones creadas al arreglo de secciones que se añadira al listview.
secciones.push(primeraSeccion);
secciones.push(segundaSeccion);


$.general.sections=secciones;

/////////

// /*la creacion de secciones puede realizarse de la misma forma que la que se utiliza para crear los items de una seccion:
 // por ejemplo:
 // */
// 
// var secciones=[];
// 
// for(i=0;i<5;i++){
	// var seccionN=Ti.UI.createListSection({
		// headerTitle:'area/departamento'+i,
		// font:{
			// fontSize:40
		// }
	// });
	// var dataItems=[];
	// for(x=0;x<5;x++){
		// dataItems.push({
			// //"@elemento" hace referncia al bindid del template para el elememto a utilizar
			// elemento:{text:'elemnto '+x},es_info:{text:'subtitulo elemento'}
		// });
		// seccionN.setItems(dataItems);
	// }
	// secciones.push(seccionN);
// 	
// }
// $.general.sections=secciones;

$.index.open();