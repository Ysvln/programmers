/*
나누어 떨어지는 숫자 배열

문제 설명

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, 
solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

*/

function solution(arr, divisor) {
  // arr 배열을 돌면서 divisor로 나눈 값의 나머지가 0인 배열 만들기
  let newArr = arr.filter((el) => el % divisor === 0);
  let answer = newArr.sort(function (a, b) {
    return a - b;
  });
  if (answer.length == 0) return [-1];
  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
