
const formulario = document.getElementById('formularioAluno');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    validation();

    function validation() {
        
        const provaA = document.getElementById('provaUm').value;
        const provaB = document.getElementById('provaDois').value;
        const provaC = document.getElementById('provaTres').value;
        const provaD = document.getElementById('provaQuatro').value;
        const converteA = parseInt(provaA);
        const converteB = parseInt(provaB);
        const converteC = parseInt(provaC);
        const converteD = parseInt(provaD);
        
        const soma = converteA+converteB+converteC+converteD;
        const media = soma / 4;

        console.log(typeof(converteA))
        console.log(typeof(converteB))

        console.log(typeof(converteC))
        console.log(typeof(converteD))
        console.log(soma)
        console.log(media)

        if(media>= 7) {
            const aprovado = document.getElementById('aprovado').style.display = 'block';
            console.log(aprovado)
        } else {
            const reprovado = document.getElementById('reprovado').style.display = 'block';
            console.log(reprovado)
        }

    }
})


const formularioArea = document.getElementById('formArea');
    formularioArea.addEventListener('submit',function(e) {

    e.preventDefault();
    CalculaArea();

    function CalculaArea() {
        const lado = document.getElementById('quadrado').value
        const ladoInt = parseInt(lado);
        const area = ladoInt * ladoInt;
        const printResultadoAreaQuadrado = `${area} metros quadrados`
        console.log(area)
        const printResultadoArea =document.getElementById('areaResultado')
        printResultadoArea.innerHTML = printResultadoAreaQuadrado
    }
} )



const calcIMC = document.getElementById('imc')
calcIMC.addEventListener('submit', function(e) {
    e.preventDefault();

    CalculoImc();
    function CalculoImc() {
        const alturas = document.getElementById('altura').value;
        const pesos = document.getElementById('peso').value;
        let alturaFloat = parseFloat(alturas)
        let pesoFloat = parseFloat(pesos)

        const alturaAoQuadrado = alturaFloat * alturaFloat;
        const resultadoDOIMC = pesoFloat/alturaAoQuadrado;
        const printIMCNaTela = `Seu IMC é ${resultadoDOIMC}`
        const IMCnatela =document.getElementById('valorImc')
        IMCnatela.innerHTML = printIMCNaTela


        console.log(alturaFloat)
        console.log(pesoFloat)
        console.log(alturaAoQuadrado)

        console.log(resultadoDOIMC)

        const y = resultadoDOIMC

        const classsificacaoNaTela = document.getElementById('classificacao')
        const msgPesoBaixo = 'Peso baixo';
        const msgPesonormal = 'Peso normal ou adequado';
        const msgSobrepeso = 'Sobrepeso';
        const msgObesidade1 = 'Obesidade Grau I';
        const msgObesidade2 = 'Obesidade Grau II';
        const msgObesidade3 = 'Obesidade Grau III';



        if (y < 18.5) {
            classsificacaoNaTela.innerHTML = msgPesoBaixo;
            console.log("Peso baixo")
        } else if (y > 18.5 && y < 24.9) {
            classsificacaoNaTela.innerHTML = msgPesonormal;
            console.log("Peso normal ou adequado")
        } else if (y > 24.9 && y < 29.9) {
            classsificacaoNaTela.innerHTML = msgSobrepeso;
            console.log("Sobrepeso")
        } else if (y > 30 && y < 34.9) {
            classsificacaoNaTela.innerHTML = msgObesidade1;
            console.log("Obesidade Grau I")
        } else if (y > 35 && y < 39.9) {
            classsificacaoNaTela.innerHTML = msgObesidade2;
            console.log("Obesidade Grau II")        
        }else {
            classsificacaoNaTela.innerHTML = msgObesidade3;
            console.log("Obesidade Grau III")
        }
}
})

const calculaConsumo = document.getElementById('calculaConsumo');
calculaConsumo.addEventListener('submit', function(e) {
    e.preventDefault();
    calculadoraDeConsumo()

    function calculadoraDeConsumo() {
        const quantidadeDeKm = document.getElementById('quilometragem').value;
        let convertKmEmFloat = parseFloat(quantidadeDeKm);
        const qtdDeGasolinaGasta = convertKmEmFloat /12;
        const valorGastoComCombustivel = qtdDeGasolinaGasta * 5.29

        const alteraMsg = document.getElementById('msgCombustivel');
        const printTelaValorGasto =  `O valor gasto com combustível foi de R$ ${valorGastoComCombustivel} reais`
        
        alteraMsg.innerHTML = printTelaValorGasto;

        console.log(convertKmEmFloat)
        console.log(qtdDeGasolinaGasta)



    }
    
})



const formValorCasa = document.getElementById('formValorCasa');

formValorCasa.addEventListener('submit', function(e) {
    e.preventDefault()

    CalculaValorCasa()
    function CalculaValorCasa() {
        const areaConstruida = document.getElementById('areaConstruida').value;
        const Quartos = document.getElementById('Quartos').value;
        const suite = document.getElementById('suite').value;
        const banheiro = document.getElementById('banheiro').value;
        const vagaGaragem = document.getElementById('vagaGaragem').value;

        let converteareaConstruida = parseFloat(areaConstruida)
        let converteQuartos = parseFloat(Quartos)
        let converteSuite = parseFloat(suite)
        let converteBanheiro = parseFloat(banheiro)
        let converteVagaGaragem = parseFloat(vagaGaragem)

        
        const precoDoMetro = converteareaConstruida * 400;
        const addQuarto = converteQuartos * 1000;
        const addSuite = converteSuite * 1250;
        const addBanheiro = converteBanheiro * 500;
        const addVagaGaragem = converteVagaGaragem * 500
        
        const valorDaCasa = precoDoMetro + addQuarto + addSuite + addBanheiro + addVagaGaragem;
        
                console.log(precoDoMetro)
                console.log(addQuarto)
                console.log(addSuite)
                console.log(addBanheiro)
                console.log(addVagaGaragem)

                console.log(valorDaCasa)

        
        
                
                
                
                
                
                
                
                //validação da piscina
                const OpcaoNao = document.getElementById('opcao3').value;
                const Sim = 'sim';
                
                if (OpcaoNao === Sim) {
                const addPscina = valorDaCasa + 2000;
                console.log(addPscina)
                
                } else {
                    const devalorizaPscina = valorDaCasa - 1000;
                    console.log(devalorizaPscina)
                }
       


    }




})