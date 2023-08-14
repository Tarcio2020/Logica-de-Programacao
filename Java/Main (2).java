/******************************************************************************

  Exercício 1:* Crie uma representação de um algoritmo para calcular se o aluno foi aprovado ou não a partida da nota média de uma matéria. Considere que o valor mínimo para ser aprovado é 7 e a maior nota é 10. Informe se o aluno foi aprovado ou reprovado. 


*******************************************************************************/
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
	
	System.out.println("Ecercício 1");
	System.out.println("Digite as notas do aluno:");

	Scanner sc = new Scanner(System.in);
	int prova1,prova2,prova3,prova4;

	prova1 = sc.nextInt();
	prova2 = sc.nextInt();
	prova3 = sc.nextInt();
	prova4 = sc.nextInt();
    
    int soma = prova1 + prova2 + prova3 + prova4;
    int media = soma/4;
	
	

	System.out.println("A média do aluno foi " + media);

     if (media >= 7) {
            System.out.println("Aluno Aprovado!");
        } else {
            System.out.println("reprovado!.");
        }
        
        
 /******************************************************************************

*Exercício 2:* Crie um algoritmo que realize o calculo de da área de um quadrado.


*******************************************************************************/
    
    System.out.println("Ecercício 2");
    System.out.println("Digite um lado do Quadrado");

    int ladoDoQuadrado;
	ladoDoQuadrado = sc.nextInt();
	
	int areaDoQuadrado = ladoDoQuadrado*ladoDoQuadrado;

	System.out.println("A área do quadrado é, "+ areaDoQuadrado +" metros quadrados");
	
 /******************************************************************************

*Exercício 3:* Represente um algoritmo para realizar o calculo do IMC e informe ao usuário o resultado com base na seguinte classificação:

    - Menos de 18,5: Peso baixo
    - Entre 18,5 e 24,9: Peso normal ou adequado
    - Entre 25,0 e 29,9: Sobrepeso
    - Entre 30,0 e 34,9: Obesidade Grau I
    - Entre 35 e 39,9: Obesidade Grau II
    - Maior que 40,0: Obesidade Grau III ou Mórbida

*******************************************************************************/
    System.out.println("Exercício 3");
    System.out.println("calculadora de IMC");
    
    double altura, peso;
    System.out.println("Digite seu altura");
    altura = sc.nextDouble();
    System.out.println("Digite sua massa");
    peso = sc.nextDouble();
    
    double alturaAoQuadrado = altura * altura;
    double CalculoDoIMC = peso / alturaAoQuadrado;
    
    System.out.println("Seu IMC é de " + CalculoDoIMC);
    
    double y = CalculoDoIMC;
    
        if (y < 18.5) {
             System.out.println("Peso baixo");
        } else if (y > 18.5 && y < 24.9) {
            System.out.println("Peso Normal");
        } else if (y > 24.9 && y < 29.9) {
            System.out.println("Sobre Peso");
        } else if (y > 30 && y < 34.9) {
            System.out.println("Obsidade grau I");
        } else if (y > 35 && y < 39.9) {
            System.out.println("Obsidade grau II");
        } else {
            System.out.println("Obsidade grau III");
        }
    

 /******************************************************************************

*Exercício 4:* Crie a representação de um algoritmo para realizar o consumo de combustível 
* de uma frota de uma empresa de acordo com a a quilometragem rodada de um determinado dia. 
* Dado que todos os carros utilizam gasolina, o preço cotado é de R$5,29 e os carros tem 
* um consumo médio de 12km/L.


*******************************************************************************/
    
    System.out.println("Exercício 4");
    System.out.println("Digite quantos KMs foram rodados.");
    

    
    double quilometragemRodada;
        quilometragemRodada = sc.nextDouble();
        
    double valorDaGasolina = 5.29;    
    double LitrosDeCombustivel = quilometragemRodada / 12;
    double CustoDoCombustivel = LitrosDeCombustivel * valorDaGasolina;
    System.out.println(CustoDoCombustivel);

    
    

 /******************************************************************************

*Desafio:* Um gerente de uma imobiliária deseja criar um sistema para calcular o preço de um casa de acordo com suas especificações. 

Dado as seguintes informações: 

    - Preço do metro quadrado construído na região é de R$400
    - Para cada quarto, adicione R$1000,00
        - Se for uma suíte acrescente mais R$250,00
    - Para cada banheiro, adicione R$500,00
    - Caso a case possua 2 pavimentos, adicione R$ 20.000,00
    - Para cada espaço de garagem na casa, adiciona R$500,00
    - Se a casa possuir piscina, adicione R$2.000,00, caso contrário é desvalorizada em R$ 1000,00

Crie um algoritmo que, dada os dados de entradas necessários, realize o calculo do valor total da casa.

*******************************************************************************/
    
    double metrosConstruidos, quartoSemSuite, quartoComSuite, banheiros, vagasNaGaragem;

    System.out.println("Desafio Final");
    System.out.println("Digite a qtd de metros quadrados construídos");
    metrosConstruidos = sc.nextDouble();
    System.out.println("Digite a qtd de Quartos sem Suíte");
    quartoSemSuite = sc.nextDouble();
    System.out.println("Digite a qtd de Quartos com Suíte");
    quartoComSuite = sc.nextDouble();
    System.out.println("Digite a qtd de banheiros");
    banheiros = sc.nextDouble();
    System.out.println("Digite a qtd vagas na garagem");
    vagasNaGaragem = sc.nextDouble();
    
    double valorMetrosConstruidos = metrosConstruidos * 400;
    double valorQuartoSemSuite = quartoSemSuite * 1000;
    double valorQuartoComSuite = quartoComSuite * 1250;
    double banheiro = banheiros * 500;
    double valorVagasNaGaragem = vagasNaGaragem * 500;
    
    
    double somarTudo = valorMetrosConstruidos + valorQuartoSemSuite + valorQuartoComSuite + banheiro + valorVagasNaGaragem;
    
    System.out.println(somarTudo);


    

	}

}