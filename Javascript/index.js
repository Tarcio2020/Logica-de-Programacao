function IdsHtmlSelections(id) {
    return document.getElementById(id).value;
}

function getById(id) {
    return document.getElementById(id);
}

const studentForm = getById('studentForm');
studentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validation();

    function validation() {
        const name = IdsHtmlSelections("name");
        const assessmentOne = parseInt(IdsHtmlSelections("assessmentOne"));
        const assessmentTwo = parseInt(IdsHtmlSelections("assessmentTwo"));
        const assessmentThree = parseInt(IdsHtmlSelections("assessmentThree"));
        const assessmentFour = parseInt(IdsHtmlSelections("assessmentFour"));
        let average = (assessmentOne + assessmentTwo + assessmentThree + assessmentFour) / 4;

        if (average >= 7) {
            getById('passOrFail').innerHTML = `O aluno ${name} foi aprovado!`;
        } else {
            getById('passOrFail').innerHTML = `O aluno ${name} foi reprovado!`;
        }
    }
})

const formSquareArea = getById('formSquareArea');
formSquareArea.addEventListener('submit', function (e) {
    e.preventDefault();
    calculateAreaOfSquare();

    function calculateAreaOfSquare() {
        const sideOfSquare = parseFloat(IdsHtmlSelections('sideOfSquare'));
        const resultArea = sideOfSquare ** 2;
        getById("messageArea").innerHTML = `${resultArea} metros quadrados`;
    }
})

const formBmi = getById('formBmi')
formBmi.addEventListener('submit', function (e) {
    e.preventDefault();
    bmiCalculation();

    function bmiCalculation() {
        const height = parseFloat(IdsHtmlSelections('height'));
        const bodyMass = parseFloat(IdsHtmlSelections('bodyMass'));
        const bmiResult = parseInt(bodyMass / height ** 2);
        const arrayMsgTypeBodyMass = ['Peso baixo', 'Peso normal ou adequado', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III'];
        getById("bmiMessage").innerHTML = `Seu IMC é ${bmiResult}`;
        
        function classificationBmi(indice) {
            return getById('classificacao').innerHTML = arrayMsgTypeBodyMass[indice];
        }

        if (bmiResult < 18.5) {
            classificationBmi(0);
        } else if (bmiResult > 18.5 && bmiResult < 24.9) {
            classificationBmi(1);
        } else if (bmiResult > 24.9 && bmiResult < 29.9) {
            classificationBmi(2);
        } else if (bmiResult > 30 && bmiResult < 34.9) {
            classificationBmi(3);
        } else if (bmiResult > 35 && bmiResult < 39.9) {
            classificationBmi(4);
        } else {
            classificationBmi(5);
        }
    }
})

const formGasolineConsumption = getById('formGasolineConsumption');
formGasolineConsumption.addEventListener('submit', function (e) {
    e.preventDefault();
    consumptionCalculator();

    function consumptionCalculator() {
        const kilometersTraveled = parseFloat(IdsHtmlSelections('kilometersTraveled'));
        const priceofGasoline = (kilometersTraveled / 12) * 5.29;
        getById('msgCalculatorGasoline').innerHTML = `O valor gasto com combustível foi de R$ ${priceofGasoline} reais`
    }
})

const housePriceForm = getById('housePriceForm');
housePriceForm.addEventListener('submit', function (e) {
    e.preventDefault()
    calculatorHousePrice()

    function calculatorHousePrice() {
        const constructedArea = parseFloat(IdsHtmlSelections('constructedArea')) * 400;
        const quarters = parseFloat(IdsHtmlSelections('quarters')) * 1000;
        const suite = parseFloat(IdsHtmlSelections('suite')) * 1250;
        const bathroom = parseFloat(IdsHtmlSelections('bathroom')) * 500;
        const parkingSpaces = parseFloat(IdsHtmlSelections('parkingSpaces')) * 500;
        const optionYesOrNoFloors = IdsHtmlSelections('optionYesOrNoFloors');
        const optionYesOrNoPool = IdsHtmlSelections('optionYesOrNoPool');
        const priceOfHouse = constructedArea + quarters + suite + bathroom + parkingSpaces;
        
        function msgPrice(x, y) {
            return getById('msgPriceHouse').innerHTML = `O valor da casa é de ${x + y}`;
        }

        if (optionYesOrNoFloors === 'sim' && optionYesOrNoPool === 'sim') {
            msgPrice(priceOfHouse, 22000);
        }
        else if (optionYesOrNoFloors === 'sim' && optionYesOrNoPool !== 'sim') {
            msgPrice(priceOfHouse, 19000);
        }
        else if (optionYesOrNoFloors !== 'sim' && optionYesOrNoPool == 'sim') {
            msgPrice(priceOfHouse, 2000);
        }
        else if (!optionYesOrNoFloors !== 'sim' && !optionYesOrNoPool !== 'sim') {
            msgPrice(priceOfHouse, -1000);
        } 
    }
    return true;
})

