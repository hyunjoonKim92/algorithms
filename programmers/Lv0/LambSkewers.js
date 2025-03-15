"use strict";

/**
 * 양꼬치
 * @param {number} n - 양꼬치 n 인분
 * @param {number} k - 음료수 k 개
 * @returns {number}
 */
function solution(n, k) {
    return 12000 * n + 2000 * k - Math.floor(n / 10) * 2000;
}
