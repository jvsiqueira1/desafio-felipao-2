let resultado = calculation(106,5)
let nivel = ""
function calculation(win,lose){
    let resultado = win - lose
    return resultado
}
    if(resultado < 10){
        nivel = "Ferro"
    }else if(resultado <= 20){
        nivel = "Bronze"
    }else if(resultado <= 50){
        nivel = "Prata"
    }else if(resultado <= 80){
        nivel = "Ouro"
    }else if(resultado <= 90){
        nivel = "Diamante"
    }else if(resultado <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    console.log(`O Herói tem saldo de ${resultado} vitórias e está nível de ${nivel}`)