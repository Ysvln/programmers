/*
숨어있는 숫자의 덧셈 (1)

문제 설명

문자열 my_string이 매개변수로 주어집니다.
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

*/

function solution(my_string) {
  let arr = [...my_string].map((el) => Number(el));
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      answer = answer + arr[i];
    }
  }
  return answer;
}
