/*
중복된 문자 제거

문제 설명

문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

*/

function solution(my_string) {
  let arr = [...my_string];
  console.log(arr);
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer.push(arr[i]);
    }
  }
  return answer.join("");
}

/*

function solution(my_string) {
    return [...new Set(my_string)].join('');
}

*/
