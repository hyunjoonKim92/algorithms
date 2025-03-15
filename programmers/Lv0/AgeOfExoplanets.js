"use strict";

/**
 * 외계행성의 나이
 * @param {number} age - 나이
 * @returns {string}
 */
function solution(age) {
    const str = 'abcdefghij';

    return age.toString().split("").map(i => str[+i]).join("");
}
