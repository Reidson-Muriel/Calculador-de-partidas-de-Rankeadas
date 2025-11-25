
let resultado = CalculadoraDePartidas(50, 10);
console.log(`O heroi tem de saldo de ${resultado.saldo} esta no nivel ${resultado.nivel}`);

function CalculadoraDePartidas(vitoria, derrota){
    
    let nivel = "";
    let saldo = vitoria - derrota;
    if(vitoria < 10){
         nivel = "Ferro";
    }else if (vitoria <= 20){
         nivel = "Bronze";
    }else if (vitoria <= 50) {
         nivel = "Prata";
    }else if (vitoria <= 80) {
         nivel = "Ouro";
    }else if (vitoria <= 90) {
         nivel = "Diamante";
    }else if (vitoria <= 100) {
         nivel = "Lendario";
    }else{
         nivel = "Imortal";
    }
    return {saldo, nivel};
}
