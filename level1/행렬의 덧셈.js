/*
행렬의 덧셈


행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, 
solution을 완성해주세요.
*/

function solution(arr1, arr2) {
  let answer = [];
  // 배열 안 배열의 n번째 인덱스의 값을 더해서 새로운 배열로 만들기
  for (let i = 0; i < arr1.length; i++) {
    let emptyArr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      emptyArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(emptyArr);
  }
  return answer;
}

console.log(solution([1, 2], [3, 4]));
