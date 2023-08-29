/*Exercício 1:* Crie uma representação de um algoritmo para calcular se o aluno foi aprovado ou não a partida da nota média de uma matéria. Considere que o valor mínimo para ser aprovado é 7 e a maior nota é 10. Informe se o aluno foi aprovado ou reprovado.*/

import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
    	System.out.println("Ecercício 1");
    	System.out.println("Digite as notas do aluno:");
    	Scanner sc = new Scanner(System.in);
    	int assessmentOne, assessmentTwo, assessmentThree, assessmentFour, average;
    	assessmentOne = sc.nextInt();
    	assessmentTwo = sc.nextInt();
    	assessmentThree = sc.nextInt();
    	assessmentFour = sc.nextInt();
        average = (assessmentOne + assessmentTwo + assessmentThree + assessmentFour) / 4;
    	System.out.println("A média do aluno foi " + average);
            if (average >= 7) {
                System.out.println("Aluno Aprovado!");
            } else {
                System.out.println("reprovado!.");
            }
            
 /*Exercício 2:* Crie um algoritmo que realize o calculo de da área de um quadrado.*/
 
        System.out.println("Ecercício 2");
        System.out.println("Digite um lado do Quadrado");
    	double squareSide = sc.nextInt();
        double resultado = Math.pow(squareSide, 2);
    	System.out.println("A área do quadrado é, "+ resultado +" metros quadrados");
    	
/*Exercício 3:* Represente um algoritmo para realizar o calculo do IMC e informe ao usuário o resultado com base na seguinte classificação:
    - Menos de 18,5: Peso baixo
    - Entre 18,5 e 24,9: Peso normal ou adequado
    - Entre 25,0 e 29,9: Sobrepeso
    - Entre 30,0 e 34,9: Obesidade Grau I
    - Entre 35 e 39,9: Obesidade Grau II
    - Maior que 40,0: Obesidade Grau III ou Mórbida*/
    
        System.out.println("Exercício 3");
        System.out.println("calculadora de IMC");
        double height, bodyMass;
        System.out.println("Digite seu altura");
        height = sc.nextDouble();
        System.out.println("Digite sua massa");
        bodyMass = sc.nextDouble();
        double calculationOfBmi = bodyMass / (Math.pow(height, 2));
        System.out.println("Seu IMC é de " + calculationOfBmi);
            if (calculationOfBmi < 18.5) {
                 System.out.println("Peso baixo");
            } else if (calculationOfBmi > 18.5 && calculationOfBmi < 24.9) {
                System.out.println("Peso Normal");
            } else if (calculationOfBmi > 24.9 && calculationOfBmi < 29.9) {
                System.out.println("Sobre Peso");
            } else if (calculationOfBmi > 30 && calculationOfBmi < 34.9) {
                System.out.println("Obsidade grau I");
            } else if (calculationOfBmi > 35 && calculationOfBmi < 39.9) {
                System.out.println("Obsidade grau II");
            } else {
                System.out.println("Obsidade grau III");
            }
            
 /*Exercício 4:* Crie a representação de um algoritmo para realizar o consumo de combustível 
* de uma frota de uma empresa de acordo com a a quilometragem rodada de um determinado dia. 
* Dado que todos os carros utilizam gasolina, o preço cotado é de R$5,29 e os carros tem 
* um consumo médio de 12km/L.*/

        System.out.println("Exercício 4");
        System.out.println("Digite quantos KMs foram rodados.");
        double kmsDriven;
        kmsDriven = sc.nextDouble();
        double fuelCost = (kmsDriven / 12) * 5.29;
        System.out.println(fuelCost);
        
 /*Desafio:* Um gerente de uma imobiliária deseja criar um sistema para calcular o preço de um casa de acordo com suas especificações. 
Dado as seguintes informações: 
    - Preço do metro quadrado construído na região é de R$400
    - Para cada quarto, adicione R$1000,00
        - Se for uma suíte acrescente mais R$250,00
    - Para cada banheiro, adicione R$500,00
    - Caso a case possua 2 pavimentos, adicione R$ 20.000,00
    - Para cada espaço de garagem na casa, adiciona R$500,00
    - Se a casa possuir piscina, adicione R$2.000,00, caso contrário é desvalorizada em R$ 1000,00
Crie um algoritmo que, dada os dados de entradas necessários, realize o calculo do valor total da casa.*/

        double metersBuilt, room, roomWithSuite, bathroom, parkingSpaces;
        String optionYesOrNoFloors;
        String optionYesOrNoPool;
        System.out.println("Desafio Final");
        System.out.println("Digite a qtd de metros quadrados construídos");
        metersBuilt = sc.nextDouble() * 400;
        System.out.println("Digite a qtd de Quartos sem Suíte");
        room = sc.nextDouble() * 1000;
        System.out.println("Digite a qtd de Quartos com Suíte");
        roomWithSuite = sc.nextDouble() * 1250;
        System.out.println("Digite a qtd de banheiros");
        bathroom = sc.nextDouble() * 500;
        System.out.println("Digite a qtd vagas na garagem");
        parkingSpaces = sc.nextDouble() * 500;
        System.out.println("A casa possui dois pavimentos? Digite (y) para sim ou (n) para não");
        optionYesOrNoFloors = sc.next();
        System.out.println("A casa possui piscina? Digite (y) para sim ou (n) para não");
        optionYesOrNoPool = sc.next();
        double resultOfSum = metersBuilt + room + roomWithSuite + bathroom + parkingSpaces;
            if (optionYesOrNoFloors.equals("y") && optionYesOrNoPool.equals("y")) {
                System.out.println(resultOfSum + 22000);
            } else if (optionYesOrNoFloors.equals("y") && !optionYesOrNoPool.equals("y")) {
                System.out.println(resultOfSum + 19000);
            } else if (!optionYesOrNoFloors.equals("y") && optionYesOrNoPool.equals("y")) {
                System.out.println(resultOfSum + 2000);
            } else if (!optionYesOrNoFloors.equals("y") && !optionYesOrNoPool.equals("y")) {
                 System.out.println(resultOfSum + -1000);
            } else {
                System.out.println("Deu Erro");
            }
    	}
    }