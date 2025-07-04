package test;

import java.util.Scanner;

public class Ex3 {
	static final int[] amounts = {400000, 600000, 800000, 1000000};

	public static void main(String[] args) {

		ex3_1();
		ex3_2();
	}

	public static void ex3_1() {
		Scanner sc = new Scanner(System.in);
		System.out.print("인원 수를 입력하시오 --> ");
		int numOfPeople = sc.nextInt();
		int totalAmount = 0;
		if (numOfPeople >= 4) {
			totalAmount = amounts[3];
		} else {
			totalAmount = amounts[numOfPeople - 1];
		}
		System.out.printf("%,d원 지원\n", totalAmount);
	}

	public static void ex3_2() {
		final double[] unitPrices = {99.3, 187.9, 280.6};
		final int[] defaultPrices = {910, 1600, 7300};

		Scanner sc = new Scanner(System.in);
		System.out.print("전력사용량을 입력하시오 --> ");
		int usageOfElec = sc.nextInt();
		double unitPrice = 0;
		int defaultPrice = 0;

		int idx = Math.round((float) usageOfElec / 200) - 1;

		if (idx >= 2) {
			unitPrice = unitPrices[2];
			defaultPrice = defaultPrices[2];
		} else {
			unitPrice = unitPrices[idx];
			defaultPrice = defaultPrices[idx];
		}

		System.out.printf("사용량:%dkm/h\n", usageOfElec);
		System.out.printf("기본요금:%d원\n", defaultPrice);
		System.out.printf("단가:%.1f원\n", unitPrice);
		System.out.printf("전기요금:%.1f원", (defaultPrice + (unitPrice * usageOfElec)));
	}
}
