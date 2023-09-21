const prompt = require("prompt-sync")();

let reiniciar = true
let x // var inteiro
let um = 1 //valor 
let o = 0 //divisores

function calcular() {
    console.clear()

    console.log("Verificador de Números Primos\n\n")
    console.log("Digite um valor e direi se o mesmo é um número primo ou não:\n\n")
     x = parseFloat(prompt())

    if (x > 0) {
        while (um <= x) {
            if (x % um == 0) {
                o++
            }
            um++
        }
    }

    if (0 == 2) {
        console.clear()
        console.log("O número", x, "\téprimo!\n\n")
    }
    else {
        console.clear
        console.log("O número", x, "\tnão é primo!\n\n")
    }
}

function inicio() {
    while (reiniciar) {
        calcular()
        console.log("Deseja reiniciar, escreva true para sim ou falso para não.\n")
        reiniciar = prompt()
    }
}

inicio()