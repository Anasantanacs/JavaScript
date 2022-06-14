function calculadora() {
    const operação = Number (prompt ( ' Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    
    let n1 = Number (prompt ('Insira o primeiro valor:'));
    let n2 = Number (prompt ('Insira o segundo valor:'));
    let Resultado;

 function Soma(){ 
    Resultado = n1 + n2;
    alert (`${n1} + ${n2} = ${Resultado}`)
    novaOperação();
}
 function Subtração(){ 
    Resultado = n1 - n2;
    alert (`${n1} - ${n2} = ${Resultado}`)
    novaOperação();
}
function Multiplicação(){ 
    Resultado = n1 * n2;
    alert (`${n1} * ${n2} = ${Resultado}`)
    novaOperação();
}
function DivisãoReal(){ 
    Resultado = n1 / n2;
    alert (`${n1} / ${n2} = ${Resultado}`)
    novaOperação();
}

function  DivisãoInteira(){ 
    Resultado = n1 % n2;
    alert (`O resto da divisão entre ${n1} e ${n2} é igual a  ${Resultado}`);
}
function  Potenciação(){ 
    Resultado = n1 ** n2;
    alert (`${n1} elevado ${n2} = ${Resultado}ª é igual a `);
}

function novaOperação(){
    let opção = prompt ('deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
  
    if (opcao == 1) {
        calculadora();
    } else if (opcao == 2) {
        alert('Até mais!');
    } else {
        alert('Digite uma opção válida!');
        novaOperacao();}
}

 if(operação == 1){
    Soma();}
 else if (operação == 2){
    subtracao();}
 else if (operação == 3){
    Multiplicação ();}
 else if (operação == 4){
    DivisaoReal();}
 else if (operação == 5){
    DivisaoInteira();}
 else if (operação == 6){
    Potenciacao();}
}
calculadora();