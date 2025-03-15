"use strict";

/**
 * 최빈값 구하기
 * @param {Array<number>} array - 정수 배열
 * @returns {number}
 */
function solution(array) {
    let map = new Map();

    for (let i of array) map.set(i, (map.get(i) || 0) + 1);
    map = [...map].sort((a, b) => b[1] - a[1]);

    return map.length === 1 || map[0][1] > map[1][1] ? map[0][0] : -1;
}
