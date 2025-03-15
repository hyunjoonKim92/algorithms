"use strict";

/**
 * 주사위의 개수
 * @param {Array<number>} box - [상자 가로길이, 상자 세로길이, 상자 높이]
 * @param {number} n - 주사위 모서리 길이
 * @returns {number}
 */
function solution(box, n) {
    return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
}

/**
 * improved func
 * @description reduce 로 함수 간소화
 */
function improvedSoluction(box, n) {
    return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}
