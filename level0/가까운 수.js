/*
가까운 수

문제 설명

정수 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

>> 제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
*/

function solution(array, n) {
  array.sort();
  let newArr = array.map((el) => Math.abs(n - el));
  let answer = array[newArr.indexOf(Math.min.apply(null, newArr))];

  return answer;
}

// 아연 풀이

function solution(array, n) {
  array = array.sort((a, b) => a - b);
  let arr = [];

  // [[3, 17], [10, 10], [28, 8]]
  for (let i = 0; i < array.length; i++) {
    if (n > array[i]) arr.push([array[i], n - array[i]]);
    else arr.push([array[i], array[i] - n]);
  }

  // [[28, 8], [10, 10], [3, 17]]
  arr = arr.sort((a, b) => a[1] - b[1]);

  // [28, 8] => 28
  return arr[0][0];
}
