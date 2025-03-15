"use strict";

/**
 * 피자 나눠 먹기 (3)
 * @param {number} slice - 피자 조각 수
 * @param {number} n - 피자 먹는 사람
 * @returns {number}
 */
function solution(slice, n) {
    return Math.ceil(n / slice);
}
