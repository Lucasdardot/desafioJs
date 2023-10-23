//Atividade 1:
//ao clicar no botão "Contagem de Cliques, incrementar de 1 em 1 o valor de uma variável"
//mostrar o resultado no "resultado1"
let clicks = 0
function contagemClicks(){
    clicks++;
    resultado1 = document.getElementById("resultado1").textContent = clicks
}

//Atividade 2:
//ao clicar no botão mostre o resultado de um número aleatório
function at2(){
    const numaleatorio = Math.floor(Math.random()*100)
    console.log(numaleatorio)
    document.getElementById("numaleatorio").innerHTML = numaleatorio
}




//Atividade 3:
//ao clicar no botão mostre um texto(string), pode ser qualquer texto "oi tudo bem" por exemplo
function at3(){
    const frase = "Isso é uma frase!"
    document.getElementById("at3").innerHTML = frase
}


//Atividade 4:
//ao clicar no botão, altere a cor do texto
//extra: também alterar a cor do próprio botão
function at4(){
    document.getElementById("cor").style.color = "blue"
}




//Atividade 5:
// ao clicar no botão realizar a soma dos números inseridos nos inputs
function at5(){
    const num1 =parseInt(document.getElementById("num1").value) 
    const num2 =parseInt(document.getElementById("num2").value) 
    const soma = num1 + num2
    document.getElementById("result").innerHTML = "O resultado é: " + soma
}



//Atividade 6:
// ao clicar no botão realizar a multiplicação dos números inseridos nos inputs
function at6(){
    const n1 =parseInt(document.getElementById("n1").value)
    const n2 =parseInt(document.getElementById("n2").value) 
    const result = n1 * n2
    document.getElementById("resultado6").innerHTML = "O resultado é: " + result
}





//Atividade 7:
//verificar qual número é maior ou menor, utilizando os numeros inseridos nos inputs
//essa atividade é mais desafiadora, terá que usar um if else
//tente ao máximo fazer sozinha, quando nao souber mais pode pedir ajuda
function at7(){
    const num1 =parseInt(document.getElementById("numero1").value) 
    const num2 =parseInt(document.getElementById("numero2").value) 

    if(num1 > num2){
        document.getElementById("maior").innerHTML = num1 + " é maior que " + num2
    }
    else {
        document.getElementById("maior").innerHTML = num2 + " é maior que " + num1
    }
     }












//Atividade 8:
//ao clicar no botão mostrar o resultado (da fruta) do que a pessoa escolheu
//dica: usar apenas um nome de função usando parametros

function at8(escolhaFruta){
document.getElementById("escolha").innerHTML = "você escolheu " + escolhaFruta    
}