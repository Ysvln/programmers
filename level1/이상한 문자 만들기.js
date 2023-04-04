/*

이상한 문자 만들기

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 
홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.


*/

function solution(s) {
  let answer = "";
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 == 0) {
        answer += words[i][j].toUpperCase();
      } else {
        answer += words[i][j].toLowerCase();
      }
    }

    if (i < words.length - 1) {
      answer = answer + "";
    }
  }

  return answer;
}

console.log(solution("hello world"));

/*
1. 문장의 각 단어를 공백을 포함해서 나누고
2. 그 단어의 0번째를 포함한 짝수번째의 인덱스를 대문자로 변환하고 (홀수 번째는 소문자로 하고)
3. 변환한 단어를 다시 한 단어로 만든다.

*/
