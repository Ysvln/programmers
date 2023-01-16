/*
가운데 글자 가져오기

문제 설명

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

*/

function solution(s) {
  let indexNum = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.slice(indexNum - 1, indexNum + 1);
  } else {
    return s.slice(indexNum, indexNum + 1);
  }
}

console.log(solution("a"));
