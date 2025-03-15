"use strict";

/**
 * 짝수의 합
 * @param {number} n - 정수
 * @returns {number}
 */
function solution(n) {
    let sum = 0;

    for (let i = 1, len = n; i <= len; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}
