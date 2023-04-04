/*
수박수박수박수박수박수?

문제 설명

길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를 들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
*/

function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    i % 2 === 0 ? (answer += "박") : (answer += "수");
  }
  return answer;
}

console.log(solution(3));

/* function solution(n) {
  let answer = '';
  if (n % 2) answer = '수' + '박수'.repeat(Math.floor(n / 2));
  else answer = '수박'.repeat(n / 2);
  return answer;
} */
