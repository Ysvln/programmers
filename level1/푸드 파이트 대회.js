/*
푸드 파이트 대회
*/

function solution(food) {
  // 0. 물을 0번 음식이라 했음 (항상 1이다) => 물은 제외한 배열
  let foodList = food.filter((el, index) => index !== 0);
  console.log(food, foodList);

  // 1. 물을 제외한 배열을 받는다. 이때 그 배열의 각 요소가 짝수여야 함
  // 요소가 홀수 일 땐 그 요소의 값에서 -1을 해줘야 함
  let newFood = foodList.map((el) => (el % 2 == 0 ? el : el - 1));

  // 2. 0번째 인덱스를 "1"로 (food[0]의 요소 나누기 2)번 / 1번째 인덱스를 "2"로 (food[1]의 요소 나누기 2)번 ...
  // console.log("newFood", newFood)
  let repeatNum = newFood.map((el, index) =>
    String(index + 1).repeat(Math.floor(el / 2))
  );
  // console.log("repeatNum", repeatNum)

  // 3. 새롭게 반환하는 문자열의 중간값에는 늘 0이 와야 함
  let result = repeatNum.concat([0]).concat(repeatNum.reverse());

  return result.join("");
}
