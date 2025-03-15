"use strict";

/**
 * 나이 출력하기
 * @param {number} age - 나이
 * @returns {number}
 */
function solution(age) {
    return new Date().getFullYear() - age;
}
