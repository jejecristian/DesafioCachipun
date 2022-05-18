// Se crea funcion que permite jugar al Cachipun
function jugar() {
    // Se invoca función que solicita la cantidad de partidas
    var cantPartidas = cantidadPartidas()

    // Variables auxiliares para frases de cachipun
    var frase = ' '
    var fraseUsuario = ' '
    var fraseMaquina = ' '

    // Valida cantidad de partidas
    if (cantPartidas > 0) {
        // Ciclo para cantidad de partidas
        for (var i = 1; i <= cantPartidas; i++) {
            // Calcula aleatoriamente la jugada de la máquina
            var cachipunMaquina = Math.floor(Math.random() * (3)) + 1

            // Se solicita al usuario ingresar una opción para la jugada
            var cachipunUsuario = prompt("Partida #" + i + " de " + cantPartidas + "\nIngrese una opción de Cachipún:\n1 para Piedra\n2 para Papel\n3 para Tijera:", 1)
            var cachipunUsuario = parseInt(cachipunUsuario)

            // Se valida la opción de cachipún ingresada
            if (cachipunUsuario != 1 & cachipunUsuario != 2 & cachipunUsuario != 3) {
                // Instrucciones para cuando la opción ingresada no es válida
                alert("La opción de Cachipún ingresada no es válida.\nLamentablemente ha perdido esta partida.")
            } else {
                // Instrucicones para cuando la opción ingresada sí es válida
                // Se ejecuta enfrentamiento entre el usuario y la máquina
                if (cachipunUsuario == 3 & cachipunMaquina == 2) {
                    // Tijera le gana a Papel, gana el usuario
                    alert("Victoria! \nTijera le gana a Papel. \nUsted ha ganado esta partida.")
                } else if (cachipunUsuario == 2 & cachipunMaquina == 1) {
                    // Papel le gana a Piedra, gana el usuario
                    alert("Victoria! \nPapel le gana a Piedra. \nUsted ha ganado esta partida.")
                } else if (cachipunUsuario == 1 & cachipunMaquina == 3) {
                    // Piedra le gana a Tijera, gana el usuario
                    alert("Victoria! \nPiedra le gana a Tijera. \nUsted ha ganado esta partida.")
                } else if (cachipunUsuario == cachipunMaquina) {
                    // Es un empate
                    switch (cachipunUsuario) {
                        case 1:
                            frase = 'Piedra'
                            break;
                        case 2:
                            frase = 'Papel'
                            break;
                        case 3:
                            frase = 'Tijera'
                            break;
                        default:
                            break;
                    }
                    // Muestra mensaje de empate
                    alert("Por las barbas de Merlín! \nAmbos han sacado " + frase + ".\nHa sido un empate.")
                } else {
                    // Gana la maquina
                    switch (cachipunUsuario) {
                        case 1:
                            fraseUsuario = 'Piedra'
                            break;
                        case 2:
                            fraseUsuario = 'Papel'
                            break;
                        case 3:
                            fraseUsuario = 'Tijera'
                            break;
                        default:
                            break;
                    }
                    switch (cachipunMaquina) {
                        case 1:
                            fraseMaquina = 'Piedra'
                            break;
                        case 2:
                            fraseMaquina = 'Papel'
                            break;
                        case 3:
                            fraseMaquina = 'Tijera'
                            break;
                        default:
                            break;
                    }
                    // Muestra mensaje de derrota
                    alert("Derrota...\n" + fraseMaquina + " le gana a " + fraseUsuario + ".\nUsted ha perdido esta partida.")
                }
            }
        }
        // Muestra mensaje cuando se ha terminado el juego
        alert("Han concluido todas las partidas del juego. Hasta la próxima...")
    }
}

// Se crea funcion que permite indicar la cantidad de partidas
function cantidadPartidas() {
    // Se solicita ingresar la cantidad de partidas a jugar
    var cantPartidas = prompt("Ingrese la cantidad de partidas que desea jugar:",1)
    var cantPartidas = parseInt(cantPartidas)
    // Valida la cantidad de partidas por jugar
    if (String(cantPartidas) == 'NaN' || cantPartidas < 1) {
        cantPartidas = 0
        alert("El valor ingresado no es válido. Fin del juego!")
    }
    // Valida y consulta si realmente desea jugar más de 10 partidas
    if (cantPartidas > 10) {
        var respuesta = confirm("¿Está seguro que desea jugar " + cantPartidas + " partidas?")
        // Si el usuario se arrepiente de jugar mas de 10 partidas, 
        // entonces empieza todo denuevo
        if (respuesta == false) {
            cantPartidas = 0
            jugar()
        }
    }
    // Retorna cantidad de partidas que desea jugar
    return cantPartidas
}