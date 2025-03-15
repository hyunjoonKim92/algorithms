"use strict";

/**
 * 짝수는 싫어요
 * @param {number} n - 정수
 * @returns {Array<number>}
 */
function solution(n) {
    let result = [];

    for (let i = 1, len = n; i <= len; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }

    return result;
}

/**
 * improved func
 * @description map, filter 로 함수 간소화
 */
function improvedSoluction(n) {
    return Array(n).fill(1).map((v, i) => v + i).filter(v => v % 2 === 1);
}
