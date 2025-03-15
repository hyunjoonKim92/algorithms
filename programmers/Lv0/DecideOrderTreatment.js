"use strict";

/**
 * 진료순서 정하기
 * @param {Array<number>} emergency - 응급도
 * @returns {Array<number>}
 */
function solution(emergency) {
    return emergency.map(v => [...emergency].sort((a, b) => b - a).indexOf(v) + 1);
}
