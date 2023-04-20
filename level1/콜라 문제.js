/* 콜라 문제*/

function solution(a, b, n) {
  // n을 a로 나눴을 때 몫 * b(새롭게 주는 수) == 새로운 콜라 갯수
  // n을 a로 나눴을 때 나머지 == 기존 콜라

  let newCoke = Math.floor(n / a) * b;
  let oldCoke = n % a;

  // n (새로운 콜라 갯수 + 기존 콜라) 를 a로 나눴을 때 몫 * b ==> 계속 반복하는데
  // 이때 n이 a보다 작게 되면, 멈추고
  // answer에 새로운 콜라 갯수들만 더한다

  let answer = 0;

  // while 안 조건문이 거짓이 될 때까지 do를 반복
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}
