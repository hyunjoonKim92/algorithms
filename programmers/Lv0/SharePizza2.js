"use strict";

/**
 * 피자 나눠 먹기 (2)
 * @param {number} n - 피자 먹는 사람
 * @returns {number}
 */
function solution(n) {
    let result = 1;

    while ((result * 6) % n !== 0) {
        result++;
    }

    return result;
}
