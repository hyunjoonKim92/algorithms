"use strict";

/**
 * 중앙값 구하기
 * @param {Array<number>} array - 정수 배열
 * @returns {number}
 */
function solution(array) {
    const midIdx = Math.floor(array.length / 2);
    const sortArr = array.sort((a, b) => a - b);

    return sortArr[midIdx];
}
