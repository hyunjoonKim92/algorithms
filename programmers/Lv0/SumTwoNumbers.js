"use strict";

/**
 * 두 수의 합
 * @param {number} num1 - 첫번째 정수
 * @param {number} num2 - 두번째 정수
 * @returns {number}
 */
function solution(num1, num2) {
    return num1 + num2;
}

/**
 * improved func
 * @description 문제 내 조건 충족 추가
 */
function improvedSoluction(num1, num2) {
    if (-50000 > num1 && num1 > 50000) return;
    if (-50000 > num2 && num2 > 50000) return;

    return num1 + num2;
}
