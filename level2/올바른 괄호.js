/*
올바른 괄호

문제 설명

괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

*/

function solution(s) {
  /*
    기존 풀이 

    (의 갯수와 )의 갯수를 구해서 그 갯수가 서로 일치하면 true를 리턴한다.

    let countLeft = 0;
    let countRight = 0;
    let right = "("
    let left = ")"

     for ( var i = 0; i < s.length; i++ ) {
        if ( s[i] !== right ) {
            countLeft++;
        } else{
            countRight++; 
        }
     }

     
    if(countLeft == countRight){
        return true;
    } else{
        return false;
    }

    *** 이렇게 작성한 코드가 틀린 이유
    ==> 괄호의 갯수만 각각 카운트해서 갯수가 같은 지 다른 지만 체크함
        괄호가 닫히면서 시작하는 경우를 고려하지 못 함 (닫히면서 시작하는 경우는 false를 반환해야 하는데 갯수만 맞으면 true를 반환하는 상황이 생김...ㅠㅠ)
    
    */
  let count = 0;
  let right = "(";

  for (var i = 0; i < s.length; i++) {
    // 지금 작성한 코드가 맞는 이유
    // ==> 열린 괄호를 두고 체크 했기 때문에 맞음
    s[i] === right ? count++ : count--;

    if (count < 0) {
      break;
    }
  }

  return count === 0 ? true : false;
}

// 23-04-26 ============================> 스택 개념 문제로 생각해야 한다..!

function solution(s) {
  // 스택을 활용하기 위해 배열을 생성하고
  const stack = [];

  for (let c of s) {
    if (c === "(") {
      stack.push(c);
      // 스택 비어있을 때 예외 처리가 필요함
    } else {
      if (stack.length == 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
