package test;

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		final int MinHeight = 125;
		final int MaxHeight = 160;

		System.out.print("어린이의 신장(cm)을 입력하세요:");
		float height = sc.nextFloat();

		// 1번째
		System.out.println(height >= MinHeight);
		//2번째
		System.out.println(height >= MinHeight && height < MaxHeight);
	}
}
