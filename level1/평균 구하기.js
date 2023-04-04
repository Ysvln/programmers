/*

평균 구하기

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

*/

function solution(arr) {
  // 평균을 구하는 법 => 1. 전체 값을 더해서 2. 수의 갯수로 나눈다.
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  let answer = sum / arr.length;
  return answer;
}
console.log(solution([1, 2, 3, 4]));

// solution([1,2,3,4]) 2.5
