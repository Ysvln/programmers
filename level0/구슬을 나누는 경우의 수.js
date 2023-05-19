/*
구슬을 나누는 경우의 수

문제 설명

머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 
구슬은 모두 다르게 생겼습니다. 
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
*/

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

function solution(balls, share) {
  let answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  return Math.round(answer);
}

/*
 일부 테스트 케이스가 통과하지 않아서 오류 찾다가
 ==> 자바스크립트에서 소수점 연산을 하다보면 예기치못한 오류가 뜬다고 한다.

 10진법을 2진법으로 바꾸는 변환 과정에서 소수 중 일부가 이 과정에서 무한 소수가 됨 => 컴퓨터가 유한 소수로 저장 (이때 오차 발생)

 이 문제를 Math.round()로 해결 가능하다.
*/
