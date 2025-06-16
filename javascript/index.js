function iniciarJuego() {
    alert("Abri la consola para ver el juego.")
    const valores = ["piedra", "papel", "tijeras"]//Declaramos un array
    console.log("Bienvenido jugador! vamos a jugar a Piedra, Papel o Tijeras. \nComo te llamas?")
    let nomJugador = prompt("Usuario del jugador:")
    while (!nomJugador || nomJugador.trim() === "") {
        nomJugador = prompt("No podes jugar sin nombre! por favor ingresa un nombre:")
    } //Utilizamos el bucle while para validar que el jugador ingrese un nombre y no sea "espacio".

    console.log("Hola", nomJugador, "Comencemos.")

    let rondas = parseInt(prompt("¿Cuantas rondas quieres jugar?"), 10) //nos aseguramos que java interprete el número ingresado como decimal.
    while (isNaN(rondas) || rondas <= 0) {
        rondas = parseInt(prompt("Por favor, ingrese un número de rondas valido:"), 10)
    } //Validamos que retorne true si no ingresa un número valido oh si las rondas son < o iguales a 0.

    //funciones locales

    //Devuelve la elección del jugador.
    function pedirEleccionJugador() {
        let eleccionJugador = prompt("Elegí piedra, papel oh tijeras.").toLocaleLowerCase()
        while (!valores.includes(eleccionJugador)) {
            eleccionJugador = prompt("Por favor, solo podes elegir piedra, papel oh tijeras.").toLocaleLowerCase()
        }
        return eleccionJugador;
    }
    //Devuelve la elección de la pc.
    function eleccionPC() {
        const eleccionpc = Math.floor(Math.random() * valores.length)
        return valores[eleccionpc].toLocaleLowerCase()
    }
    //Devuelve al ganador de la ronda.
    function determinarGanador(jugador, pc) {
        if (jugador === pc) {
            return "empate"
        }
        if (
            (jugador === "piedra" && pc === "tijeras") ||
            (jugador === "papel" && pc === "piedra") ||
            (jugador === "tijeras" && pc === "papel")
        )
            return "jugador"
        else {
            return "PC"
        }
    }
    //Devuelve al ganador de la ronda.
    function jugarRonda() {
        const valorElegidoJugador = pedirEleccionJugador()
        const valorElegidoPc = eleccionPC()

        const ganador = determinarGanador(valorElegidoJugador, valorElegidoPc)

        if (ganador === "empate") {
            console.log("¡Empataron! elegiste:", valorElegidoJugador, "y la pc:", valorElegidoPc)
        }
        else if (ganador === "jugador") {
            console.log("ganaste está ronda", nomJugador, "la pc eligió:", valorElegidoPc)
        }
        else {
            console.log("la pc ganó está ronda eligió:", valorElegidoPc)
        }
        return ganador
    }
    // 
    //creamos contandores para los puntos de la pc y el jugador.
    let puntosJugador = 0
    let puntosPc = 0

    for (i = 1; i <= rondas; i++) {
        console.log("Ronda", i)
        const ganador = jugarRonda()
        if (ganador === "jugador") {
            puntosJugador += 1
        }
        else if (ganador === "PC") {
            puntosPc += 1
        }

        console.log("Puntaje de", nomJugador, ":", puntosJugador, "PC:", puntosPc)
    }
    console.log("¡Juego terminado!")
    if (puntosJugador > puntosPc) {
        console.log("¡¡¡Felicidades", nomJugador, "ganaste!!!")
    }
    else if (puntosJugador < puntosPc) {
        console.log("La PC gano el juego, no te deprimas", nomJugador,"\nPuedes volver a intentarlo :D")
    }
    else {
        console.log("¡¡Quedaron en empate!!")
    }
}

