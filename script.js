// Carne-400g por pessoa + de 6 horas - 650g
// Cerveja - 1200 ml por pessoa + 6horas -2000ml
// Refrigerante/agua - 1000ml por pessoa  + 6horas 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultados");

function calcular() {
    console.log("Calculando")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qtTotalDeCarnes = carne *  adultos + (carne/2 * criancas);
    let qtTotalDeCerveja = cerveja *  adultos;
    let qtTotalDeBebidas = bebidas *  adultos + (bebidas/2 * criancas);

    resultado.innerHTML = `<p>${qtTotalDeCarnes / 1000} KG de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtTotalDeCerveja / 355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtTotalDeBebidas / 2000)} Garrafas de Bebida </p>`
 
}

function carnePP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return  650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return  2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return  1500;
    } else{
        return 1000;
    }
}