/*
약수의 합

문제 설명

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(n) {
  let answerArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answerArr.push(i);
    }
  }
  let answer = answerArr.reduce((sum, num) => sum + num, 0);
  return answer;
}

console.log(solution(12)); // 28
