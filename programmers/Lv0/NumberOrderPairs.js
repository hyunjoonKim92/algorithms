"use strict";

/**
 * 순서쌍의 개수
 * @param {number} n - 정수
 * @returns {number}
 */
function soluction(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }

    return arr.length;
}

/**
 * improved func
 * @description map, filter 로 함수 간소화
 */
function improvedSoluction(n) {
    return Array(n).fill(1).map((v, i) => v + i).filter(v => n % v === 0).length;
}
