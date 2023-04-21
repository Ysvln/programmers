/*

다음 큰 숫자

문제 설명

자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

*/

function solution(n) {
  // n을 이진법으로 바꾸고 1의 갯수
  // 효율성 테스트에서 실패...
  //     let countOne = n.toString(2).split("0").join("").length;
  //     console.log(n.toString(2).split("0").join(""), countOne)

  //     while(true){
  //         n++
  //         if(n.toString(2).split("0").join("").length == countOne){
  //             return n;
  //         }
  //     }

  // 구글링
  let arr = n.toString(2).split(""); // 2진법으로 변환해 배열 만들기
  let cnt = arr.filter((one) => one === "1").length; // 1의 개수 세기
  let cnt2;
  while (cnt !== cnt2) {
    //cnt와 cnt2의 크기가 같을 때 종료
    ++n; // 다음 큰 숫자
    cnt2 = n
      .toString(2)
      .split("")
      .filter((one) => one === "1").length; // 1의 개수 세기
  }
  return n;
}
