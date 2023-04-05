/*

자릿수 더하기

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

*/
function solution(n) {
  // n의 각 자릿수를 분리
  // 분리한 자릿수를 순회하며 더한다
  let answer = String(n).split("");
  for (let i = 0; i < answer.length; i++) {
    return answer.reduce((acc, cur) => acc + cur * 1, 0);
  }
}

console.log(solution(315));

/*
    Data Type 

    string(숫자) * Number = Number
    string(숫자) + Number = String(숫자)


    * 숫자로 출력
    > parseInt(), Number()


    parseInt(cur) / Number(cur) /  cur * 1

*/
