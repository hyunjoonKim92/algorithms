"use strict";

/**
 * 특정 문자 제거하기
 * @param {Array<string>} my_string - 문자열 배열
 * @param {string} letter - 제거할 문자열
 * @returns {Array<number>}
 */
function solution(my_string, letter) {
    return [...my_string].filter(val => val !== letter).join("");
}
