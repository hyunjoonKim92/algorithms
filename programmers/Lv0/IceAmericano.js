"use strict";

/**
 * 아이스 아메리카노
 * @param {number} money - 돈
 * @returns {Array<number>}
 */
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}
