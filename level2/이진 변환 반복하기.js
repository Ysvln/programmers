/*

이진 변환 반복하기

문제 설명

0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. 
s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 
이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.


*/

function solution(s) {
  // 1. 문자열에서 특정 문자를 제거 (x의 모든 0을 제거)
  // 2. 제거한 문자의 길이 C를 구함 => C를 이진법으로 표현한 => 문자열

  // console.log(String(c.toString(2)))
  // return String(c.toString(2));

  // 차례대로 => 이진 변환의 횟수, 제거된 0의 갯수
  let answer = [0, 0];

  while (s !== "1") {
    // s = s.split("");
    // let countLength = s.filter((el) => el === "1").length;

    let countLength = s.replace(/0/g, "").length;

    // 변환 횟수 증가
    answer[0]++;
    // console.log("s.length", s.length, "countLength", countLength);

    // 원본 s의 전체 길이 - 0을 제거한 s의 길이 = 0의 갯수
    answer[1] += s.length - countLength;

    // 이진법으로 변환
    s = countLength.toString(2);
  }

  return answer;
}
