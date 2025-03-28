"use strict";

/**
 * 문자열 묶기
 * @param {Array<string>} strArr - 문자열 배열
 * @returns {number}
 */
function solution(strArr) {
    const diction = {};

    strArr.forEach(item => {
        const len = item.length;

        diction[len] = diction[len] ?? [];
        diction[len].push(item);
    });

    return Math.max(...Object.values(diction).map(a => a.length));
}
