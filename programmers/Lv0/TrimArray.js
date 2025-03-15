"use strict";

/**
 * 배열 자르기
 * @param {Array<number>} numbers - 정수 배열
 * @param {number} num1 - 첫번째 정수
 * @param {number} num2 - 두번째 정수
 * @returns {Array<number>}
 */
function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}
