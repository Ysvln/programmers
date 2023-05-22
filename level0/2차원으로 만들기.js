/*
2차원으로 만들기

문제 설명

정수 배열 num_list와 정수 n이 매개변수로 주어집니다. 
num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

*/

function solution(num_list, n) {
  // var answer = [];

  //     const list_length = num_list.length;

  //     for(let i=0; i<list_length/n; i++){
  //         let spliced_arr = num_list.splice(0, n);
  //         answer.push(spliced_arr);
  //     }

  //     return answer;

  let answer = [];

  for (let i = 0; i < num_list.length; ) {
    let empty = [];
    for (let j = 0; j < n; j++) {
      empty.push(num_list[i]);
      i++;
    }
    answer.push(empty);
  }

  return answer;
}
