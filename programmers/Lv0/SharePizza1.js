"use strict";

/**
 * 피자 나눠 먹기 (1)
 * @param {number} n - 피자 먹는 사람
 * @returns {number}
 */
function solution(n) {
    const num = n / 7;

    if (!Number.isInteger(num)) {
         return Math.floor(num) + 1;
    } else {
        return num;
    }
}

/**
 * improved func
 * @description Math.ceil() 로 함수 간소화
 */
function improvedSoluction(n) {
    return Math.ceil(n / 7);
}
