"use strict";

/**
 * 문자 반복 출력하기
 * @param {Array<string>} my_string - 문자열 배열
 * @param {number} n - 반복할 정수
 * @returns {string}
 */
function solution(my_string, n) {
    const strArr = my_string.split("");

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = (strArr[i].repeat(n));
    }

    return strArr.join("");
}

/**
 * improved func
 * @description map 으로 함수 간소화
 */
function improvedSolution(my_string, n) {
    return [...my_string].map(val => val.repeat(n)).join("");
}
