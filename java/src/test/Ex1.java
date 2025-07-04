package test;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;

public class Ex1 {
	static BufferedReader br = new BufferedReader(new java.io.InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

	public static void main(String[] args) throws IOException {
		bw.write("당신의 이름을 입력하세요-->>");
		bw.flush();
		String name = br.readLine();

		bw.write("당신의 주소를 입력하세요-->>");
		bw.flush();
		String address = br.readLine();


		bw.write("당신의 나이를 입력하세요-->>");
		bw.flush();
		int age = Integer.parseInt(br.readLine());

		bw.write("당신의 키를 입력하세요-->>");
		bw.flush();
		float height = Integer.parseInt(br.readLine());


		bw.write("이름:" + name + "\n");
		bw.write("주소:" + address + "\n");
		bw.write("나이:" + age + "\n");
		bw.write("키:" + height);

		bw.flush();
	}
}
