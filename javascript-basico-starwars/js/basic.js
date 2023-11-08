console.log("olá, pessoal!!")

var userName = "Thayná Dias Nascimento"

document.getElementById('user-name').innerHTML = userName

//Variaveis

var nome  = 'Mestre Yoda'
var idade = 100
var jedi = true



// operadores matematicos


var n1 = 5
var n2 = 6.7

//console.log(typeof n1)
//console.log(typeof n2)

//var total = n1 / n2 

//console.log(total)



// comparação 


//var v1 

//function soma (n1, n2){
    //console.log(n1 + n2)
//}

//soma(99, 9999)

/*function boasVindas(nome){
    alert(nome + ", Sejam bem-vindo (a)")
}

boasVindas('Thayná')


function soma(n1, n2){
    return n1 + n2
}

var resultado =  soma(10,10)

console.log(resultado)*/





/*var saldo = 1000

function saque(valor){
    
    if(valor > saldo){
       
        console.log("Valor do saque superior ao saldo")
    
    } else if( valor > 700){

        console.log("Valor do saque é superior ao maximo permitido por operação")

    } else {

        saldo = saldo - valor

    }
}

saque(701)
console.log(saldo)*/

// SENDO UM CLIENTE CORRENTISTA DE BANCO 
// POSSO SACAR DINHEIRO EM CAIXAS ELETRONICOS 
// PARA PODER COMPRAR EM LUGAR QYUE NÃO ACEITAM O CARTÃO DE DÉBITO OU CRÉDITO

// CENARIO 1: SAQUE COM SUCESSO

// DADO QUE O SALDO É DE 1000 REIAS 
// QUANDO FAÇO UM SAQUE DE 500 REIAS
// ENTÃO O VALOR DO SQUE DEVE SER DEDUZIDO DO MEU SALDO 

//CENARIO 2: SAQUE COM VALOR SUPERIOR AO SALDO 

// DADO QUE MEU SALDO É DE 1000 REIAS
// QUANDO FAÇO UM SQUE DE 1001 REIAS
// ENTÃO NÃO DEVE DEDUZIR DO MEU SALDO 
// E DEVE MOSTRAR UMA MENSAGEM DE ALERTA INFORMANDO QUE O VALOR É SUPERIOR AO SALDO 

//CENARIO 3: SAQUE COM VALOR MÁXIMO 

// DADO QUE MEU SALDO É DE 1000 REIAS
// E O VALOR MÁXIMO POR OPERAÇÃO É DE 700 REIAS 
// QUANDO FAÇO UM SAQUE NO VALOR DE 701 REAIS 
// ENTÃO NÃO DEVE DEDUZIR DO MEU SALDO
// E DEVE MOSTRAR UMA MENSAGEM DE ALERTA INFORMADO QUE O VALOR É SUPERIOR AO MAXIMO PERMITIDO POR OPERAÇÃO 


/*var gavateria = ['meias', 'sapatos', 'documentos', 'cuecas']

console.log(gavateria[2])

var personagens = ['Mestre Yoda', 'PRINCESA LEIA', 'DART VADER', 'HAN SOLO', 'CHEWBACCA', 'C3PO', 'R2D2']


personagens.push('LUKE SKYWALKER') //add alguma personagem 
//personagens.pop() // remoover o ultimo que foi add na lista 

personagens = personagens.filter(function(p){
    return p !== "CHEWBACCA"

})

personagens = personagens.filter(function(p){
    return p === "Mestre Yoda"

})

console.log(personagens)*/


// Controle de repetição 


//var gavateria = ['meias', 'sapatos', 'documentos', 'cuecas', 'ola']

/*gavateria.forEach(function(p){ // forEach para controle de repetição exibir a lista
    console.log(p)
})*/

/*for(var i in gavateria){
    console.log(gavateria[i])
}*/

/*for (var i = 0; i <= 10; i++){
    console.log(i)
// código vai ser executado até a condição retornar false

}*/



// Objetos

/*var yoda = {

    nome:'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function(){
    	console.log(`A idade do ${this.nome} é ${this.idade} anos.`)

    }

}

console.log(yoda)
yoda.mostraIdade()/*

// Constantes //

/*const nome = "Darth Vader"

console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)*/

