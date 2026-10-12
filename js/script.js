//recogemos el boton e imagen del documento HTML
const boton= document.getElementById("boton");
const imagen= document.getElementById("imagen");
//añadimos un evento al botón que se active cada vez que lo pulsemos
boton.addEventListener("click", ()=>{
    //cada vez que clickemos el botón, se cambiará el fondo de la
    //imagen de la mano, para que si sale dos veces una misma imagen
    //el usuario entienda que se ha vuelto a generar. Sin embargo
    //a veces por azar puede salir la misma imagen y color dos veces seguidas
    imagen.style.backgroundColor=coloresRandom();
    //generemos un número random del 1 al 3, depende
    //del resultado la imagen de la mano cambiará a
    //piedra, papel, o tijera
    let numRandom=Math.round(Math.random()*3)+1;
    
    switch(numRandom){
        case 1:
            imagen.src="img/papel.png";
            break;
        case 2: 
            imagen.src="img/piedra.webp";
            break;
        case 3:
            imagen.src="img/tijeras.webp";
            break;
    }
    
});
//función que devuelve un color dependiendo de un número random
//generado del 1 al 6
function coloresRandom(){
    let numRandom=Math.floor(Math.random()*6)+1;
    switch(numRandom){
        case 1:
            return "#FCCCC2";
        case 2:
          return "#FCEEC2";
         case 3:
          return "#c3ebba";
         case 4:
           return "#C2FCF1";
         case 5:
            return "#C2D6FC";
         case 6:
            return "#efd9ee";
         
        
    }
}