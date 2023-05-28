function PPT(pc,jugador){

    switch(true) {
        case (jugador == pc):{
        console.log("Es un empate! ")
        break
        }
        case (jugador === "piedra" && pc === "papel" || jugador === "tijera" && pc === "piedra" || jugador === "papel" && pc === "tijera"):{
        console.log("Has perdido! ");
        break
        }
        case (pc === "piedra" && jugador === "papel" || pc === "tijera" && jugador === "piedra" || pc === "papel" && jugador === "tijera"):{
        console.log("Has ganado! ");
        break
        }
        default: {
        console.log("Has introducido un valor erroneo ");
        break
        }
    }
    }
    PPT("piedra","papel");
    