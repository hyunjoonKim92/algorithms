"use strict";

/**
 * 합성수 찾기
 * @param {number} n - 자연수
 * @returns {number}
 */
function solution(n) {
    let divisor = [];

    for (let i = 1; i <= n; i++) {
        let cnt = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt += 1;
            }
            if (cnt >= 3) {
                divisor.push(i);
                break;
            }
        }
    }

    return divisor.length;
}
