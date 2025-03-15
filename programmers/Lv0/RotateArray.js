"use strict";

/**
 * 배열 회전시키기
 * @param {Array<number>} numbers - 정수 배열
 * @param {string} direction - 회전시킬 방향
 * @returns {Array<number>}
 */
function solution(numbers, direction) {
  let number = 0;

  switch (direction) {
      case 'right':
          number = numbers.pop();
          numbers.unshift(number);
          break;
      case 'left':
          number = numbers.shift();
          numbers.push(number);
          break;
  }

  return numbers;
}

/**
 * improved func
 * @description 삼항연산자로 함수 간소화
 */
function improvedSoluction(numbers, direction) {
    return direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
}