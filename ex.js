//alert - apresenta uma mensagem na tela
window.alert("hello world")

//confirm- pergunta ok/cancela (retorna um true ou false)
window.confirm("o jonas vai")

//promt - pega o texto da tela
window.prompt("next?")

//comentario em linha
/* 

comentario em texto 

*/ 
 
/*console.log("multimidia")


/*let nome = "saab"
nome = 25
nome = true
*/

/*let nome = prompt("informe o seu nome: ")
console.log("bem vindo!" + nome) */

//let numero1 = Number.parseInt(prompt("digite o primeiro numero: "))
//let numero2 = Number.parseInt(prompt("digite o segundo numero: "))  

//let resultado = numero1 + numero2

//console.log(resultado)

//let numero1 = Number.parseFloat(prompt("digite o primeiro numero: "))
//let numero2 = Number.parseFloat(prompt("digite o segundo numero: "))

let idade = window.prompt("qual sua idade?")
if(idade >= 18){
    console.log("maior de idade, dalheeee")
}else{
    console.log("voce é menor de idade!")
}
switch (idade) {
    case "18":
        console.log("maior de idade, dalheeee")
        
        break;

        case "27":
            console.log("esta perto dos 30")
            break;

    default:
        console.log("nada a dizer")
        break;
}


