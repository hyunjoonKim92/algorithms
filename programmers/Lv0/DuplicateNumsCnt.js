"use strict";

/**
 * 중복된 숫자 갯수
 * @param {Array<number>} array - 정수 배열
 * @param {number} n - 중복 판별을 위한 정수
 * @returns {Array<number>}
 */
function solution(array, n) {
    return array.filter(x => x == n).length;
}
