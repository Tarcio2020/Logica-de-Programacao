function IdsHtmlSelections(id) {
    return document.getElementById(id).value;
}

const forms = document.getElementById('formularioAluno');
forms.addEventListener('submit', function(e) {
    e.preventDefault();
    validation();
    
    function validation() {
        const assessmentOne = parseInt(IdsHtmlSelections("assessmentOne"));
        const assessmentTwo = parseInt(IdsHtmlSelections("assessmentTwo")); 
        const assessmentThree = parseInt(IdsHtmlSelections("assessmentThree"));
        const assessmentFour = parseInt(IdsHtmlSelections("assessmentFour"));
        const average = assessmentOne / 4 + assessmentTwo / 4 + assessmentThree / 4 + assessmentFour / 4;
        
        if(average >= 7) {
            const aprovado = document.getElementById('aprovado').style.display = 'block';
            console.log(aprovado)
        } else {
            const reprovado = document.getElementById('reprovado').style.display = 'block';
            console.log(reprovado)
        }    
    }
})

const formSquareArea = document.getElementById('formSquareArea');
formSquareArea.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateAreaOfSquare();

    function calculateAreaOfSquare() {
        const sideOfSquare = parseFloat(IdsHtmlSelections('sideOfSquare'));
        const resultArea = sideOfSquare ** 2;
        document.getElementById("messageArea").innerHTML = `${resultArea} metros quadrados`;
    }
})

const formBmi = document.getElementById('formBmi')
formBmi.addEventListener('submit', function(e) {
    e.preventDefault();
    bmiCalculation();

    function bmiCalculation() {
        const height = parseFloat(IdsHtmlSelections('height'));
        const bodyMass = parseFloat(IdsHtmlSelections('bodyMass'));
        const bmiResult = bodyMass / height ** 2;
        const arrayMsgTypeBodyMass = ['Peso baixo', 'Peso normal ou adequado', 'Sobrepeso','Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III'];
        document.getElementById("bmiMessage").innerHTML = `Seu IMC é ${bmiResult}`;

        if (bmiResult < 18.5) {
            document.getElementById('classificacao').innerHTML = arrayMsgTypeBodyMass[0];
        } else if (bmiResult > 18.5 && bmiResult < 24.9) {
            document.getElementById('classificacao').innerHTML = arrayMsgTypeBodyMass[1];
        } else if (bmiResult > 24.9 && bmiResult < 29.9) {
            document.getElementById('classificacao').innerHTML = arrayMsgTypeBodyMass[2];
        } else if (bmiResult > 30 && bmiResult < 34.9) {
            document.getElementById('classificacao').innerHTML = arrayMsgTypeBodyMass[3];
        } else if (bmiResult > 35 && bmiResult < 39.9) {
            document.getElementById('classificacao').innerHTML = arrayMsgTypeBodyMass[4];
        }else {
            document.getElementById('classificacao').innerHTML = arrayMsgTypeBodyMass[5];
        }
    }
})

const formGasolineConsumption = document.getElementById('formGasolineConsumption');
formGasolineConsumption.addEventListener('submit', function(e) {
    e.preventDefault();
    consumptionCalculator();

    function consumptionCalculator() {
        const kilometersTraveled = parseFloat(IdsHtmlSelections('kilometersTraveled'));
        const priceofGasoline = (kilometersTraveled / 12) * 5.29;
        document.getElementById('msgCalculatorGasoline').innerHTML = `O valor gasto com combustível foi de R$ ${priceofGasoline} reais`
    }
})

const housePriceForm = document.getElementById('housePriceForm');
housePriceForm.addEventListener('submit', function(e) {
    e.preventDefault()
    calculatorHousePrice()

    function calculatorHousePrice() {
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
                const OpcaoPavimento = document.getElementById('opcao4').value;
                const Sim = 'sim';
                
                if (OpcaoNao === Sim) {
                    const addPscina = valorDaCasa + 2000;
                    console.log(addPscina)

                if (OpcaoPavimento === Sim){
                    const valorFinal = addPscina + 20000;
                    console.log(valorFinal)
                    const msgNaTelaValorDaCasa = ` valor total da casa é ${valorFinal}`;
                    const alteraMsgValorCasa = document.getElementById('msgValorCasa');
                    alteraMsgValorCasa.innerHTML = msgNaTelaValorDaCasa;
                } else {
                    const msgNaTelaValorDaCasa = ` valor total da casa é ${addPscina}`;
                    const alteraMsgValorCasa = document.getElementById('msgValorCasa');
                    alteraMsgValorCasa.innerHTML = msgNaTelaValorDaCasa;
                }
                
                
                } else {
                    const devalorizaPscina = valorDaCasa - 1000;
                    console.log(devalorizaPscina)


                    if (OpcaoPavimento === Sim){
                        const valorFinal = devalorizaPscina + 20000;
                        console.log(valorFinal)
                        const msgNaTelaValorDaCasa = ` valor total da casa é ${valorFinal}`;
                        const alteraMsgValorCasa = document.getElementById('msgValorCasa');
                        alteraMsgValorCasa.innerHTML = msgNaTelaValorDaCasa;
                    } else {
                        const msgNaTelaValorDaCasa = ` valor total da casa é ${devalorizaPscina}`;
                        const alteraMsgValorCasa = document.getElementById('msgValorCasa');
                        alteraMsgValorCasa.innerHTML = msgNaTelaValorDaCasa;
                    }
                }
            }
            return true;
})