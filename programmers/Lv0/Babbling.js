"use strict"

/**
 * 옹알이
 * @param {string} babbling - 옹알이 문자열
 * @returns {number}
 */
function solution(babbling) {
    let answer = 0;

    for (let text of babbling) {
        if (/(aya|ye|woo|ma)\1+/g.test(text)) continue;
        if (/^(aya|ye|woo|ma)+$/g.test(text)) {
            answer++;
        }
    }

    return answer;
}
